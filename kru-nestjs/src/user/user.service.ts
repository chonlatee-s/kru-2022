import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return this.userRepository.find({ relations: ['major'] });
  }

  async findOne(email: string, password: string) {
    return this.userRepository.findOne({ email: email, generateId: password });
  }

  async checkEmail(email: string) {
    return this.userRepository.findOne({ email: email });
  }

  async findOneById(id: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.uuId = :uuId', { uuId: id })
      .leftJoinAndSelect('user.major', 'major')
      .getOne();
  }

  async findOneByuserId(id: number) {
    return this.userRepository
      .createQueryBuilder('user')
      .select(['user.uuId', 'user.email', 'user.fullname', 'user.profile'])
      .where('user.id = :id', { id: id })
      .leftJoinAndSelect('user.major', 'major')
      .getOne();
  }

  async createUser(data: User): Promise<User> {
    const checkUser = await this.userRepository.findOne({ email: data.email });

    // ถ้าไม่มี user คนนี้ให้ลงทะเบียน
    if (!checkUser) {
      data.type = 'U';

      await this.userRepository.save(data);
      return this.userRepository.findOne({ email: data.email });
    }
    throw new ForbiddenException();
  }

  async findTop5() {
    const userStats = await this.userRepository
      .createQueryBuilder('user')
      .select(['user.email', 'user.fullname', 'user.profile', 'user.score'])
      .leftJoinAndSelect('user.major', 'major')
      .orderBy({ 'user.updateAt': 'DESC', 'user.score': 'DESC' })
      .limit(5)
      .getMany();

    return userStats.map((data) => {
      return {
        fullname: data.fullname,
        profile: data.profile,
        score: data.score,
        major: data.major.major,
      };
    });
  }

  async updateScore(uuId: string, score: number) {
    const d = new Date();
    const YMD = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    this.userRepository.update({ uuId: uuId }, { score: score, updateAt: YMD });
  }
}
