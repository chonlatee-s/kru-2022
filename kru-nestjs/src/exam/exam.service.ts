import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamEntity } from './exam.entity';
import { ExamResult } from './interfaces/exam-result.interface';
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

  async randomExam(qty: number) {
    return await this.examRepository
      .createQueryBuilder('exam')
      .select([
        'exam.uuId',
        'exam.question',
        'exam.choice1',
        'exam.choice2',
        'exam.choice3',
        'exam.choice4',
      ])
      .orderBy('RAND()')
      .limit(qty)
      .getMany();
  }

  async answer(data: Exam[]): Promise<ExamResult> {
    const result = [];
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
      result[i] = await this.checkAnswer(data[i]);
      if (result[i].check === true) sum++;
    }
    return { sum: sum, exams: result };
  }

  async checkAnswer(data: Exam) {
    const check = await this.examRepository.findOne({ uuId: data.uuId });
    if (check.answer === data.answer) {
      data.ref = check.ref;
      data.check = true;
    } else {
      data.ref = check.ref;
      data.check = false;
    }
    return data;
  }
}
