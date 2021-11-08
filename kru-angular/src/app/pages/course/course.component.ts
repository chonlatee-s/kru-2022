import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
    private courseService: CourseService,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.path = environment.apiUrl;
      this.courses = await this.courseService.find({}).toPromise();
    } catch(err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }
 
}
