import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumModule } from 'src/forum/forum.module';
import { UserModule } from 'src/user/user.module';
import { ForumDetailController } from './forum-detail.controller';
import { ForumDetailEntity } from './forum-detail.entity';
import { ForumDetailService } from './forum-detail.service';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([ForumDetailEntity]),
    forwardRef(() => ForumModule),
  ],
  controllers: [ForumDetailController],
  providers: [ForumDetailService],
  exports: [ForumDetailService],
})
export class ForumDetailModule {}
