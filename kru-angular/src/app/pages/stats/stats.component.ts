import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Stats } from 'src/app/features/stats/interfaces/stats.interface';
import { StatsService } from 'src/app/features/stats/services/stats.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  showMenuRight: boolean = true;
  avg: number = 100;

  userProfile!: UserProfile;
  stats!: Stats[];

  constructor(
    private authService: AuthService,
    private statsService: StatsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.authService.getProfile();
    this.stats = await this.statsService.getStats(this.userProfile.uuId);
  }

}
