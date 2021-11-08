import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { Job } from 'src/app/features/job/interfaces/job.interface';
import { JobService } from 'src/app/features/job/services/job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {

  showMenuRight: boolean = true;
  jobs!: Job[];
  first = 0;
  rows = 5;

  constructor(
    private jobService: JobService,
    private fnService: FnService,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.jobs = await this.jobService.find({}).toPromise();
    } catch(err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }

  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.jobs ? this.first === (this.jobs.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.jobs ? this.first === 0 : true;
  }

}
