import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { DownloadService } from './download.service';
import { Download } from './interfaces/download.interface';

@Controller('download')
export class DownloadController {
  constructor(private downloadService: DownloadService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.downloadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.downloadService.findOne(id);
  }

  @Post()
  async createJob(@Body() data: Download): Promise<Download> {
    return await this.downloadService.createDownload(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Download) {
    const download = await this.downloadService.findOne(id);
    if (!download) throw new NotFoundException();
    data.uuId = download.uuId;
    return await this.downloadService.updateDownload(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.downloadService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.downloadService.removeDownload(id);
  }
}
