import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Public } from 'src/auth/jwt-auth.guard';
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
    return await this.examService.findOne(id);
  }

  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  @Post()
  async createExam(
    @Body() data: Exam,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.img = file.filename;
    await this.examService.createExam(data);
    return file;
  }

  @Public() // อ่านไฟล์ภาพ
  @Get('img/:id')
  async getImgs(@Param('id') id: string, @Res() res) {
    const file = createReadStream(join(process.cwd(), `uploads/${id}`));
    return file.pipe(res);
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
    return await this.examService.randomExam(10);
  }

  @Get('test/competition')
  async competition() {
    return await this.examService.randomExam(20);
  }

  @Get('test/change/:num')
  async change(@Param('num') num: number) {
    return await this.examService.changeQuestion(num);
  }

  @Post('test/answer')
  async answer(@Body() data: Exam[]) {
    return await this.examService.answer(data);
  }
}
