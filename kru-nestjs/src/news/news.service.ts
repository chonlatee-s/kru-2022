import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './interfaces/news.interface';
import { NewsEntity } from './news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private newsRepository: Repository<NewsEntity>,
  ) {}

  async findAll() {
    return this.newsRepository
      .createQueryBuilder('news')
      .select(['news.news', 'news.ref', 'news.slide'])
      .getMany();
  }

  async createNews(data: News) {
    return await this.newsRepository.save(data);
  }
}
