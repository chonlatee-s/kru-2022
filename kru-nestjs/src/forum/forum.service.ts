import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MajorService } from 'src/major/major.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { ForumEntity } from './forum.entity';
import { Forum } from './interfaces/forum.interface';

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(ForumEntity)
    private forumRepository: Repository<ForumEntity>,
    private majorService: MajorService,
    private userService: UserService,
  ) {}

  async findAll() {
    const forum = await this.forumRepository
      .createQueryBuilder('forum')
      .leftJoinAndSelect('forum.detail', 'detail')
      .leftJoinAndSelect('forum.user', 'user')
      .orderBy({ 'forum.updateAt': 'DESC' })
      .getMany();

    return forum.map((data) => {
      return {
        uuId: data.uuId,
        topic: data.topic,
        updateAt: data.updateAt,
        fullname: data.user.fullname,
        profile: data.user.profile,
        majorId: data.user.majorId,
        detail: data.detail,
        userId: data.user.uuId,
      };
    });
  }

  async findOne(id: string) {
    const data = await this.forumRepository
      .createQueryBuilder('forum')
      .where('forum.uuId = :uuId', { uuId: id })
      .leftJoinAndSelect('forum.user', 'user')
      .leftJoinAndSelect('forum.detail', 'detail')
      .getOne();

    if (!data) throw new NotFoundException();

    const detail = [];

    for (let i = 0; i < data.detail.length; i++) {
      const user = await this.userService.findOneByuserId(
        data.detail[i].userId,
      );

      detail.push({
        email: user.email,
        fullname: user.fullname,
        profile: user.profile,
        major: user.major.major,
        answer: data.detail[i].answer,
        updateAt: data.detail[i].updateAt,
      });
    }

    const result = {
      uuId: data.uuId,
      topic: data.topic,
      updateAt: data.updateAt,
      fullname: data.user.fullname,
      profile: data.user.profile,
      major: await this.majorService.findOneById(data.user.majorId),
      detail: detail,
    };

    return result;
  }

  async createForum(data: Forum) {
    const userId = await this.userService.findOneById(data.uuId);
    const setData = { topic: data.topic, userId: userId.id };
    return await this.forumRepository.save(setData);
  }

  async updateForum(data: Forum) {
    return await this.forumRepository.update({ uuId: data.uuId }, data);
  }

  async removeForum(id: string) {
    return await this.forumRepository.delete({ uuId: id });
  }

  async checkId(id: string) {
    return await this.forumRepository.findOne({ uuId: id });
  }
}
