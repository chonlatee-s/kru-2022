import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Exam } from 'src/app/features/test/interfaces/exam.service';
import { TestService } from 'src/app/features/test/services/test.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  path: string = "";
  type: string = "";
  userProfile!: UserProfile;
  Count!:any;

  exams!: Exam[];
  arr: number = 0;
  nextBtn: boolean = true;
  backBtn: boolean = false;
  sendAnswerBtn: boolean = false;
  displayChangeQuestion: boolean = true;
  score: number = 0;
  checkDone: boolean = false;
  showList: boolean = false;

  M: number = 0;
  S: number = 59;
  progress = 0;

  constructor( 
    private authService: AuthService,
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.path = environment.apiUrl;
    this.userProfile = await this.authService.getProfile();
    this.type = this.route.snapshot.params.type;
    this.exams = await this.testService.getExam(this.type);
    this.M = this.exams.length - 1; // ลบหนึ่งเพราะมีอีก 59 วินาที
    this.Timer();
  }

  ngOnDestroy() {
    clearInterval(this.Count);
  }

  next() {
    if (this.arr < (this.exams.length - 1)) {
      this.arr++;
      this.backBtn = true;
    }

    if (this.arr === this.exams.length - 1) this.nextBtn = false;
  }
  
  back() {
    if (this.arr > 0) {
      this.arr--;
      this.nextBtn = true;
    }

    if (this.arr === 0) this.backBtn = false;
  }

  sendAnswer(num: number, answer: string) {
    this.progress += 100/this.exams.length;
    if (this.checkDone !== true) {
      this.exams.map( (data) => {
        if (data.num == num) data.answer = answer;
      });
      this.checkExamDone();
    }
    this.next();
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
    const toDB = {
      uuId: this.userProfile.uuId,
      exams: this.exams,
      type: this.type
    }
    const data = await this.testService.checkScore(toDB);
    this.exams = data.exams;
    //reset
    this.arr = 0;
    this.nextBtn = true;
    this.backBtn = false;
    this.sendAnswerBtn = false;
    this.score = data.sum;
    this.displayChangeQuestion = false;
    this.checkDone = true;
    this.showList = true;
  }
  async changeQuestion(num: number) {
    const data = await this.testService.changeQuestion(num);
    this.exams.splice(this.arr, 1, data[0]);
    this.displayChangeQuestion = false;
  }

  changeViewList() {
    this.showList = true;
  }
  changeViewOne() {
    this.showList = false;
  }
  directTostats() {
    this.router.navigate(['/stats'])
  }

  Timer() {
    this.Count = setInterval(()=>{
      this.S--;
      if (this.S === 0) { 
        if( this.M === 0 && this.S === 0) {
          clearInterval(this.Count);
          this.checkScore();
        } else {
          this.M--;
          this.S = 59;
        }
      }
    }, 1000);
    

  }
}
