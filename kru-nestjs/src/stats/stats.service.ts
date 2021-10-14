import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { StatsCreate } from './interfaces/stats-create.interface';
import { StatsEntity } from './stats.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(StatsEntity)
    private statsRepository: Repository<StatsEntity>,
    private userService: UserService,
  ) {}

  async findOne(id: string) {
    const user = await this.userService.findOneById(id);
    const stats = await this.statsRepository
      .createQueryBuilder('stats')
      .select(['stats.userId', 'stats.score'])
      .orderBy('stats.createAt', 'DESC')
      .where('stats.userId = :userId', { userId: user.id })
      .limit(10)
      .getMany();
    return stats;
  }

  async findTop5() {
    const userStats = await this.statsRepository
      .createQueryBuilder('stats')
      .select(['stats.userId', 'stats.score'])
      .orderBy('stats.score', 'DESC')
      .where('stats.status = :status', { status: 'L' })
      .limit(5)
      .leftJoinAndSelect('stats.user', 'user')
      .getMany();

    const result = userStats.map((val: any) => {
      return {
        fullname: val.user.fullname,
        email: val.user.email,
        profile: val.user.profile,
        major: val.user.major,
        score: val.score,
      };
    });

    return result;
  }

  async createStats(data: StatsCreate) {
    const user = await this.userService.findOneById(data.id);
    if (!user) throw new ForbiddenException();

    const stats = await this.statsRepository.find({ userId: user.id });
    if (stats.length < 10) await this.createNewStats(data);
    else {
      // ขั้นตอนที่ 1 หาตัวที่เก่าที่สุด 1 แถวและลบออก
      await this.findOldOneAndDelete(data.id);

      // ขั้นตอนที่ 2 อัปเดตสถานะเป็น O ลงข้อมูลใหม่ให้เป็น L
      await this.createNewStats(data);
    }
  }

  async createNewStats(data: StatsCreate) {
    const user = await this.userService.findOneById(data.id);
    await this.updateStatus(data.id);

    data.datas.userId = user.id;
    await this.statsRepository.save(data.datas);
  }

  async findOldOneAndDelete(id: string) {
    const user = await this.userService.findOneById(id);
    const stats = await this.statsRepository
      .createQueryBuilder('stats')
      .orderBy('stats.createAt', 'ASC')
      .where('stats.userId = :userId', { userId: user.id })
      .limit(1)
      .getOne();

    await this.statsRepository.delete({ uuId: stats.uuId });
  }

  async updateStatus(id: string) {
    const user = await this.userService.findOneById(id);
    await this.statsRepository.update({ userId: user.id }, { status: 'O' });
  }
}
