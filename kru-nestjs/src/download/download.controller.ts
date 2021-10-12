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
import { CreateDownloadDto } from './dto/create-download.dto';
import { UpdateDownloadDto } from './dto/update-download.dto';
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
  async createJob(@Body() data: CreateDownloadDto): Promise<Download> {
    return await this.downloadService.createDownload(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() downloadDto: UpdateDownloadDto,
  ) {
    const download = await this.downloadService.findOne(id);
    if (!download) throw new NotFoundException();
    downloadDto.uuId = download.uuId;
    return await this.downloadService.updateDownload(downloadDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.downloadService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.downloadService.removeDownload(id);
  }
}
