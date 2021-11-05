import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { Stats } from 'src/app/features/stats/interfaces/stats.interface';
import { StatsService } from 'src/app/features/stats/services/stats.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  avg: number = 100;

  userProfile!: UserProfile;
  stats!: Stats[];

  data:any;

  constructor(
    private authService: AuthService,
    private statsService: StatsService,
    private fnService: FnService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.authService.getProfile();
    this.stats = await this.statsService.getStats(this.userProfile.uuId);
    const datas = this.stats.map(x => { return x.score});

    this.data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
        type: 'bar',
        label: 'คะแนนสอบ',
        backgroundColor: '#66BB6A',
        data: datas,
        borderColor: 'white',
        borderWidth: 2
      }]
    }
  }

  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }


}
