import { Component, OnInit } from '@angular/core';
import { Predict } from 'src/app/features/predict/interfaces/predict.interface';
import { PredictService } from 'src/app/features/predict/services/predict.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {

  showMenuRight: boolean = true;
  step: number = 0;
  items = [{label:'อธิษฐาน'}, {label:'เสี่ยงทาย'}, {label:'สำเร็จ'}];
  predict!: Predict;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  
  constructor(private predictService: PredictService) { }

  ngOnInit() { }



  async getPredict() {
    this.step = 1;
    this.step1 = false;
    this.step2 = true;

    setTimeout(() => { 
      this.result();
    }, 1500);

  }

  async result() {
    this.predict =  await this.predictService.getPredict();
    if(this.predict) {
      this.step = 2;
      this.step2 = false;
    }
  }

}
