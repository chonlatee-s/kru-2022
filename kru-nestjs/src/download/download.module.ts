import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DownloadController } from './download.controller';
import { DownloadEntity } from './download.entity';
import { DownloadService } from './download.service';

@Module({
  imports: [TypeOrmModule.forFeature([DownloadEntity])],
  controllers: [DownloadController],
  providers: [DownloadService],
})
export class DownloadModule {}
