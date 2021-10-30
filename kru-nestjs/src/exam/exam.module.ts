import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { ExamEntity } from './exam.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatsModule } from 'src/stats/stats.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [StatsModule, UserModule, TypeOrmModule.forFeature([ExamEntity])],
  providers: [ExamService],
  controllers: [ExamController],
})
export class ExamModule {}
