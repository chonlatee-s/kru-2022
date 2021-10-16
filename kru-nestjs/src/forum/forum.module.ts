import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumController } from './forum.controller';
import { ForumEntity } from './forum.entity';
import { ForumService } from './forum.service';

@Module({
  imports: [TypeOrmModule.forFeature([ForumEntity])],
  controllers: [ForumController],
  providers: [ForumService],
})
export class ForumModule {}
