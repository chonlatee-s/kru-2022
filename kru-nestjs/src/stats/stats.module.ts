import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsEntity } from './stats.entity';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatsEntity, UserEntity])],
  providers: [StatsService, UserService],
  controllers: [StatsController],
})
export class StatsModule {}
