import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ForumService } from 'src/forum/forum.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ForumDetailEntity } from './forum-detail.entity';
import { ForumDetail } from './interfaces/forum-detail.interface';

@Injectable()
export class ForumDetailService {
  constructor(
    @InjectRepository(ForumDetailEntity)
    private forumDetailRepository: Repository<ForumDetailEntity>,
    private userService: UserService,

    @Inject(forwardRef(() => ForumService))
    private forumService: ForumService,
  ) {}

  async findAll() {
    return await this.forumDetailRepository.find({ relations: ['forum'] });
  }

  async findOne(id: string) {
    return this.forumDetailRepository.findOne({ uuId: id });
  }

  async createForumDetail(data: any) {
    const userId = await this.userService.findOneById(data.uuId);
    const forumId = await this.forumService.checkId(data.forumuuId);

    const setData = {
      answer: data.answer,
      forumId: forumId.id,
      userId: userId.id,
    };
    return await this.forumDetailRepository.save(setData);
  }

  async updateForumDetail(data: ForumDetail) {
    return await this.forumDetailRepository.update({ uuId: data.uuId }, data);
  }

  async removeForumDetail(id: string) {
    return await this.forumDetailRepository.delete({ uuId: id });
  }

  async removeFormByForumId(id: number) {
    return await this.forumDetailRepository.delete({ forumId: id });
  }
}
