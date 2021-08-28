import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitors-top',
  templateUrl: './competitors-top.component.html',
  styleUrls: ['./competitors-top.component.scss']
})
export class CompetitorsTopComponent implements OnInit {
  showMenuRight: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
