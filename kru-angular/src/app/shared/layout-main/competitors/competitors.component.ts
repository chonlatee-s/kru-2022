import { Component, OnInit } from '@angular/core';
import { Competitor } from 'src/app/features/stats/interfaces/competitor.interface';
import { StatsService } from 'src/app/features/stats/services/stats.service';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {
  competitor!: Competitor[];
  constructor(private statsService: StatsService) { }

  async ngOnInit() {
    this.competitor = await this.statsService.getTop5();
  }

}
