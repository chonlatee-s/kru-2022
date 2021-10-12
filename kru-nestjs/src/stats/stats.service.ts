import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
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
    const stats = await this.statsRepository.find({ userId: user.id });
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
}
