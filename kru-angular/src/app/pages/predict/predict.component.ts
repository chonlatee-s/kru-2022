import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss']
})
export class PredictComponent implements OnInit {
  showMenuRight: boolean = true
  items = [{label:'อธิษฐาน'}, {label:'เสี่ยงทาย'}, {label:'สำเร็จ'}];
  constructor() { }

  ngOnInit(): void {
  }

}
