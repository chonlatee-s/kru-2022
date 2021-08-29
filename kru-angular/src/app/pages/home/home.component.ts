import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenuRight: boolean = true
  cars = [
    {
      txt: 'https://live.staticflickr.com/65535/51410449848_68df1609a9_o.png',
    },
    {
      txt: 'https://live.staticflickr.com/65535/51410449848_68df1609a9_o.png',
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
