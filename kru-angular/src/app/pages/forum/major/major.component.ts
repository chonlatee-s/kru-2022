import { Component, OnInit } from '@angular/core';

interface Car {
  profile: string
  topic: string
}

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent implements OnInit {
  display:boolean = false;
  constructor() { }

  cars: Car[] = [
    {profile:'https://lh3.googleusercontent.com/a-/AOh14GicIT0uW03JgwKA-3KjWtDU1hdAIEpb5aK_zf9G=s96-c', topic:'ปีนี้สอบเกณฑ์ใหม่หรือเกณฑ์เก่า ใครรู้บอกที ขอบน้ำใจมาก'},
    {profile:'https://lh5.googleusercontent.com/-PDm4o0WFFp8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl546ptPfH9jPHnzckB5PU_iIOx1w/s96-c/photo.jpg', topic:'ประกาศรับสมัครสอบครูอาชีวะเมื่อไหร่คะ'},
  ]
  first = 0
  rows = 10

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
