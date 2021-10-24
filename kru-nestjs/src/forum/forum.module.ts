import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MajorModule } from 'src/major/major.module';
import { UserModule } from 'src/user/user.module';
import { ForumController } from './forum.controller';
import { ForumEntity } from './forum.entity';
import { ForumService } from './forum.service';
@Module({
  imports: [MajorModule, UserModule, TypeOrmModule.forFeature([ForumEntity])],
  controllers: [ForumController],
  providers: [ForumService],
  exports: [ForumService],
})
export class ForumModule {}
