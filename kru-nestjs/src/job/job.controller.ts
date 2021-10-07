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
import { CreateJobDto } from './dto/dto/create-job.dto';
import { UpdateJobDto } from './dto/dto/update-job.dto';
import { Job } from './interfaces/job.interface';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  async findAll() {
    return await this.jobService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.jobService.findOne(id);
  }

  @Post()
  async createJob(@Body() data: CreateJobDto): Promise<Job> {
    return await this.jobService.createJob(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() jobDto: UpdateJobDto) {
    const job = await this.jobService.findOne(id);
    if (!job) throw new NotFoundException();
    // เอาไอดีที่หาได้มาใส่แทน เพื่อป้องกันการอัปเดทผิดพลาด
    jobDto.uuId = job.uuId;
    return await this.jobService.updateJob(jobDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.jobService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.jobService.removeJob(id);
  }
}
