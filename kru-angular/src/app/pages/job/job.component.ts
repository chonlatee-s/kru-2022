import { Component, OnInit } from '@angular/core';

interface Car {
  topic: string
  icon: string
}

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  showMenuRight: boolean = true
  constructor() { }

  cars: Car[] = [
    {topic:'วิทยาลัยเทคนิคเดชอุดมรับสมัครครู สาขาคอมพิวเตอร์ธุรกิจ 2 อัตรา', icon:'pi pi-file'},
    {topic:'วิทยาลัยเทคนิคอุบลราชธานีรับสมัครครู สาขาคณิตศาสตร์ 1 อัตรา', icon:'pi pi-file'},
    {topic:'โรงเรียนบ้านโนนหินแห่รับสมัครครู สาขาวิทยาศาสตร์ 1 อัตรา', icon:'pi pi-file'},
    {topic:'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือรับสมัครอาจารย์พิเศษ สาขาวิทยาศาสตร์คอมพิวเตอร์ 1 อัตรา ', icon:'pi pi-file'},
    {topic:'โรงเรียนเตรียมอุดมศึกษา รับสมัครอาจารย์พิเศษ สาขาภาษาอังกฤษ 5 อัตรา', icon:'pi pi-file'},
    {topic:'วิทยาลัยเทคนิคเขมราฐรับสมัครครู สาขาช่างกลโรงงาน 1 อัตรา', icon:'pi pi-file'},
    {topic:'วิทยาลัยการอาชีพวารินชำราบรับสมัครครู สาขาภาษาไทย 7 อัตรา', icon:'pi pi-file'},
    {topic:'โรงเรียนบ้านธาตุรับสมัครครู สาขาศิลปะ 10 อัตรา', icon:'pi pi-file'},
    {topic:'มหาวิทยาลัยอุบลราชธานีรับสมัครอาจารย์พิเศษ สาขาวิทยาศาสตร์คอมพิวเตอร์ 5 อัตรา ', icon:'pi pi-file'},
    {topic:'โรงเรียนนารีนุกุล รับสมัครอาจารย์พิเศษ สาขาเคมี 3 อัตรา', icon:'pi pi-file'},
    {topic:'โรงเรียนวัดเสมียนนารี รับสมัครครู สาขาดนตรี 1 อัตรา', icon:'pi pi-file'},
    {topic:'โรงเรียนวัดเขมรภิรตาราม รับสมัครครู สาขาการเกษตร 5 อัตรา', icon:'pi pi-file'}
  ]
  first = 0
  rows = 5

  ngOnInit(): void {
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
    return this.cars ? this.first === (this.cars.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.cars ? this.first === 0 : true;
  }

}
