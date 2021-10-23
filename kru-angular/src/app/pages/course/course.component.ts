import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/features/course/interfaces/course.interface';
import { CourseService } from 'src/app/features/course/services/course.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  showMenuRight: boolean = false
  courses!: Course[];
  path: String = "";

  constructor(
    private courseService: CourseService
  ) { }

  async ngOnInit(): Promise<void> {
    this.path = environment.apiUrl;
    this.courses = await this.courseService.find({}).toPromise();
  }
 
}
