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
}
