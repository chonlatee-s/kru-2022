import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamEntity } from './exam.entity';
import { Exam } from './interfaces/exam.interface';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(ExamEntity)
    private examRepository: Repository<ExamEntity>,
  ) {}

  async findAll() {
    return this.examRepository.find();
  }

  async findOne(id: string) {
    return this.examRepository.findOne({ uuId: id });
  }

  async createExam(data: Exam) {
    return await this.examRepository.save(data);
  }

  async updateExam(data: Exam) {
    return await this.examRepository.update({ uuId: data.uuId }, data);
  }

  async removeExam(id: string) {
    return await this.examRepository.delete({ uuId: id });
  }
}
