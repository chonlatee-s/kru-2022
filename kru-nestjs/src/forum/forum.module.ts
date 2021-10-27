import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumDetailModule } from 'src/forum-detail/forum-detail.module';
import { MajorModule } from 'src/major/major.module';
import { UserModule } from 'src/user/user.module';
import { ForumController } from './forum.controller';
import { ForumEntity } from './forum.entity';
import { ForumService } from './forum.service';
@Module({
  imports: [
    MajorModule,
    UserModule,
    TypeOrmModule.forFeature([ForumEntity]),
    forwardRef(() => ForumDetailModule),
  ],
  controllers: [ForumController],
  providers: [ForumService],
  exports: [ForumService],
})
export class ForumModule {}
