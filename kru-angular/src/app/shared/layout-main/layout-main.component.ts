import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit {
  showData: boolean = true
  constructor() { }

  ngOnInit(): void {
    
  }
  onActivate(e: any) {
    this.showData = e.showMenuRight
  }

}
