import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumDetailController } from './forum-detail.controller';
import { ForumDetailEntity } from './forum-detail.entity';
import { ForumDetailService } from './forum-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([ForumDetailEntity])],
  controllers: [ForumDetailController],
  providers: [ForumDetailService],
})
export class ForumDetailModule {}
