import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  cars = [
    {
      txt: '../../../assets/img/2.png',
    },
    {
      txt: '../../../assets/img/2.png',
    }
  ]

}
