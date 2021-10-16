import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumDetailEntity } from './forum-detail.entity';
import { ForumDetail } from './interfaces/forum-detail.interface';

@Injectable()
export class ForumDetailService {
  constructor(
    @InjectRepository(ForumDetailEntity)
    private forumDetailRepository: Repository<ForumDetailEntity>,
  ) {}

  async findAll() {
    return await this.forumDetailRepository.find({ relations: ['forum'] });
  }

  async findOne(id: string) {
    return this.forumDetailRepository.findOne({ uuId: id });
  }

  async createForumDetail(data: ForumDetail) {
    return await this.forumDetailRepository.save(data);
  }

  async updateForumDetail(data: ForumDetail) {
    return await this.forumDetailRepository.update({ uuId: data.uuId }, data);
  }

  async removeForumDetail(id: string) {
    return await this.forumDetailRepository.delete({ uuId: id });
  }
}
