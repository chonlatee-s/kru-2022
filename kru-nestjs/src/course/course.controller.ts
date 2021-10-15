import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/jwt-auth.guard';
import { CourseService } from './course.service';
import { Course } from './interfaces/course.interface';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.courseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.courseService.findOne(id);
  }

  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  @Post()
  async createCourse(
    @Body() data: Course,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.img = file.filename;
    await this.courseService.createCourse(data);
    return file;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Course) {
    const course = await this.courseService.findOne(id);
    if (!course) throw new NotFoundException();
    data.uuId = course.uuId;
    return await this.courseService.updateCourse(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const course = await this.courseService.findOne(id);
    if (!course) throw new NotFoundException();
    return await this.courseService.removeCourse(id);
  }
}
