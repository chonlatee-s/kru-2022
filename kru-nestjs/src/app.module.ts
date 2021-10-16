import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JobModule } from './job/job.module';
import { DownloadModule } from './download/download.module';
import { ExamModule } from './exam/exam.module';
import { StatsModule } from './stats/stats.module';
import { UploadImgModule } from './upload-img/upload-img.module';
import { CourseModule } from './course/course.module';
import { MajorModule } from './major/major.module';
import { ForumModule } from './forum/forum.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, JobModule, DownloadModule, ExamModule, StatsModule, UploadImgModule, CourseModule, MajorModule, ForumModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
