import { Component, OnInit } from '@angular/core';

interface Car {
  topic: string
  icon: string
}

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})

export class DownloadComponent implements OnInit {
  showMenuRight: boolean = true
  constructor() { }

  cars: Car[] = [
    {topic:'ข้อสอบเก่าปี 2559 สพฐ.', icon:'pi pi-file'},
    {topic:'ดาวน์โหลดฟรีข้อสอบวิชาคณิตศาสตร์', icon:'pi pi-file'},
    {topic:'แนวข้อสอบอาชีวศึกษา รอบทั่วไป', icon:'pi pi-file'}
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
