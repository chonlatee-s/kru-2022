import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './interfaces/job.interface';
import { JobEntity } from './job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobEntity)
    private jobRepository: Repository<JobEntity>,
  ) {}

  async findAll() {
    return this.jobRepository.find();
  }

  async findOne(id: string) {
    return this.jobRepository.findOne({ uuId: id });
  }

  async createJob(data: Job) {
    return await this.jobRepository.save(data);
  }

  async updateJob(job: Job) {
    return await this.jobRepository.update({ uuId: job.uuId }, job);
  }

  async removeJob(id: string) {
    return await this.jobRepository.delete({ uuId: id });
  }
}
