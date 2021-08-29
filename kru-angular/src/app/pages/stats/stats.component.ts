import { Component, OnInit } from '@angular/core';

interface Car {
  count: string
  date: string
  score: string
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  showMenuRight: boolean = true
  avg: number = 100
  constructor() { }

  cars: Car[] = [
    {count:'1', date:'10-10-2563', score:'10'},
    {count:'2', date:'10-10-2563', score:'10'},
    {count:'3', date:'10-10-2563', score:'10'},
    {count:'4', date:'10-10-2563', score:'10'},
    {count:'5', date:'10-10-2563', score:'10'},
    {count:'6', date:'10-10-2563', score:'10'},
    {count:'7', date:'10-10-2563', score:'10'},
    {count:'8', date:'10-10-2563', score:'10'},
    {count:'9', date:'10-10-2563', score:'10'},
    {count:'10', date:'10-10-2563', score:'10'},
  ]

  ngOnInit(): void {
  }

}
