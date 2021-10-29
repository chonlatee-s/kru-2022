import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Exam } from 'src/app/features/test/interfaces/exam.service';
import { TestService } from 'src/app/features/test/services/test.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  userProfile!: UserProfile;
  exams!: Exam[];
  arr: number = 0;
  nextBtn: boolean = true;
  backBtn: boolean = false;
  sendAnswerBtn: boolean = false;
  displayMaximizable: boolean = true;

  constructor( 
    private authService: AuthService, 
    private testService: TestService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.authService.getProfile();
    this.exams = await this.testService.getExam(this.route.snapshot.params.type);
  }

  next() {
    if (this.arr < (this.exams.length-1)) {
      this.arr++;
      this.backBtn = true;
    }

    if (this.arr === this.exams.length-1) this.nextBtn = false;
  }
  
  back() {
    if (this.arr > 0) {
      this.arr--;
      this.nextBtn = true;
    }

    if (this.arr === 0) this.backBtn = false;
  }

  sendAnswer(uuId: string, answer: string) {
    this.exams.map( (data) => {
      if (data.uuId == uuId) data.answer = answer;
    });

    this.next();
    this.checkExamDone();
  }

  checkExamDone(): boolean {
    if (this.exams.filter( data => data.answer === '0').length === 0) {
      this.sendAnswerBtn = true;
      return true;
    } else {
      this.sendAnswerBtn = false;
      return false;
    }
  }

  async checkScore() {
    const data = await this.testService.checkScore(this.exams);
    console.log(data);
  }
}
