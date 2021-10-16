import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumEntity } from './forum.entity';
import { Forum } from './interfaces/forum.interface';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(ForumEntity)
    private forumRepository: Repository<ForumEntity>,
  ) {}

  async findAll() {
    return await this.forumRepository.find({ relations: ['user'] });
  }

  async findOne(id: string) {
    return this.forumRepository
      .createQueryBuilder('forum')
      .where('forum.uuId = :uuId', { uuId: id })
      .leftJoinAndSelect('forum.user', 'user')
      .getOne();
  }

  async createForum(data: Forum) {
    return await this.forumRepository.save(data);
  }

  async updateForum(data: Forum) {
    return await this.forumRepository.update({ uuId: data.uuId }, data);
  }

  async removeForum(id: string) {
    return await this.forumRepository.delete({ uuId: id });
  }
}
