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
    return this.userRepository.find();
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
}
