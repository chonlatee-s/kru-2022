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
    return this.jobRepository
      .createQueryBuilder('job')
      .select(['job.topic', 'job.ref', 'job.dateExpire'])
      .getMany();
  }

  async findOne(id: string) {
    return this.jobRepository.findOne({ uuId: id });
  }

  async createJob(data: Job) {
    return await this.jobRepository.save(data);
  }

  async updateJob(data: Job) {
    return await this.jobRepository.update({ uuId: data.uuId }, data);
  }

  async removeJob(id: string) {
    return await this.jobRepository.delete({ uuId: id });
  }
}
