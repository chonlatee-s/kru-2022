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
import { ExamService } from './exam.service';
import { Exam } from './interfaces/exam.interface';

@Controller('exam')
export class ExamController {
  constructor(private examService: ExamService) {}

  @Get()
  async findAll() {
    return await this.examService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return 'do'; //await this.examService.findOne(id);
  }

  @Post()
  async createJob(@Body() data: Exam): Promise<Exam> {
    return await this.examService.createExam(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Exam) {
    const exam = await this.examService.findOne(id);
    if (!exam) throw new NotFoundException();
    data.uuId = exam.uuId;
    return await this.examService.updateExam(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.examService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.examService.removeExam(id);
  }

  @Get('test/trainning')
  async trainning() {
    return this.examService.randomExam(10);
  }

  @Get('test/competition')
  async competition() {
    return this.examService.randomExam(20);
  }
}
