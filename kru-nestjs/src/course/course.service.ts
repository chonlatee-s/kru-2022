import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) {}

  async findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: string) {
    return this.courseRepository.findOne({ uuId: id });
  }

  async createCourse(data: Course) {
    return await this.courseRepository.save(data);
  }

  async updateCourse(data: Course) {
    return await this.courseRepository.update({ uuId: data.uuId }, data);
  }

  async removeCourse(id: string) {
    return await this.courseRepository.delete({ uuId: id });
  }
}
