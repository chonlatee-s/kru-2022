import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DownloadEntity } from './download.entity';
import { Download } from './interfaces/download.interface';

@Injectable()
export class DownloadService {
  constructor(
    @InjectRepository(DownloadEntity)
    private downloadRepository: Repository<DownloadEntity>,
  ) {}

  async findAll() {
    return this.downloadRepository.find();
  }

  async findOne(id: string) {
    return this.downloadRepository.findOne({ uuId: id });
  }

  async createDownload(data: Download) {
    return await this.downloadRepository.save(data);
  }

  async updateDownload(data: Download) {
    return await this.downloadRepository.update({ uuId: data.uuId }, data);
  }

  async removeDownload(id: string) {
    return await this.downloadRepository.delete({ uuId: id });
  }
}
