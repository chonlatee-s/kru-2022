import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Course } from '../interfaces/course.interface';
@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<Course, Course>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/course') }

}
