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
import { Major } from './interfaces/major.interface';
import { MajorService } from './major.service';

@Controller('major')
export class MajorController {
  constructor(private majorService: MajorService) {}

  @Get()
  async findAll() {
    return await this.majorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.majorService.findOne(id);
  }

  @Post()
  async createMajor(@Body() data: Major): Promise<Major> {
    return await this.majorService.createMajor(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Major) {
    const job = await this.majorService.findOne(id);
    if (!job) throw new NotFoundException();
    data.uuId = job.uuId;
    return await this.majorService.updateMajor(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.majorService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.majorService.removeMajor(id);
  }
}
