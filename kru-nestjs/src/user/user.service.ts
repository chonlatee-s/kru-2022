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

  async findOne(email: string) {
    return this.userRepository.findOne({ email: email });
  }

  async findOneById(id: string) {
    return this.userRepository.findOne({ uuId: id });
  }

  async createUser(data: User): Promise<User> {
    const checkUser: User = await this.userRepository.findOne({
      generateId: data.generateId,
    });

    // ถ้าไม่มี user คนนี้ให้ลงทะเบียน
    if (!checkUser) {
      await this.userRepository.save(data);
      return this.userRepository.findOne({ generateId: data.generateId });
    }
    throw new ForbiddenException();
  }

  async findTop5() {
    const userStats = await this.userRepository
      .createQueryBuilder('user')
      .select(['user.email', 'user.fullname', 'user.profile', 'user.score'])
      .orderBy({ 'user.updateAt': 'DESC', 'user.score': 'DESC' })
      .limit(5)
      .getMany();
    return userStats;
  }
}
