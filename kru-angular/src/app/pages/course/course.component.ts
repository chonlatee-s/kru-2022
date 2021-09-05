import { Component, OnInit } from '@angular/core';

export interface Car {
  id:string;
  url:string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  showMenuRight: boolean = false
  cars: Car[] = [
    {id:'สร้างเว็บไซต์อย่างง่ายด้วย Google Sites', url:'https://live.staticflickr.com/65535/51423507131_d4dddee55c_m.jpg'}, 
    {id:'สร้างชั้นเรียนออนไลน์ด้วย Google Classroom', url:'https://live.staticflickr.com/65535/51422758942_6fd2f425a1_m.jpg'}, 
    {id:'สร้างเกมตอบคำถามง่าย ๆ ด้วยโปรแกรม Kahoot', url:'https://live.staticflickr.com/65535/51421833793_8e04595387_m.jpg'}, 
    {id:'ดาวน์โหลดฟอนต์ และติดตั้งฟอนต์จาก Google เพื่อใช้งาน', url:'https://live.staticflickr.com/65535/51423507091_a2ebc92e08_m.jpg'}, 
    {id:'เก็บและแชร์ข้อมูลออนไลน์ด้วย Dropbox', url:'https://live.staticflickr.com/65535/51423761463_dfb68a8176_m.jpg'}, 
    {id:'ออกแบบเอกสารสัมภาษณ์ครูผู้ช่วย หรือตำแหน่งงานอื่น ๆ', url:'https://live.staticflickr.com/65535/51423507011_0792db787b_m.jpg'}, 
  ]

  constructor() { }

  ngOnInit() {
  }
 
}
