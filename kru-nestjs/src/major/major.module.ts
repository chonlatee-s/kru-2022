import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MajorController } from './major.controller';
import { MajorEntity } from './major.entity';
import { MajorService } from './major.service';

@Module({
  imports: [TypeOrmModule.forFeature([MajorEntity])],
  controllers: [MajorController],
  providers: [MajorService],
  exports: [MajorService],
})
export class MajorModule {}
