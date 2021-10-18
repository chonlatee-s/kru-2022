import { Component, OnInit } from '@angular/core';
import { Competitor } from 'src/app/features/stats/interfaces/competitor.interface';
import { StatsService } from 'src/app/features/stats/services/stats.service';

@Component({
  selector: 'app-competitors-top',
  templateUrl: './competitors-top.component.html',
  styleUrls: ['./competitors-top.component.scss']
})
export class CompetitorsTopComponent implements OnInit {
  showMenuRight: boolean = true
  
  competitor!: Competitor[];
  constructor(private statsService: StatsService) { }

  async ngOnInit() {
    this.competitor = await this.statsService.getTop5();
  }

}
