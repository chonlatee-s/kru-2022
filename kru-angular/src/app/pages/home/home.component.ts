import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { News } from 'src/app/features/news/interfaces/news.interface';
import { NewsService } from 'src/app/features/news/services/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMenuRight: boolean = true;
  news!: News[];
  left!: News[];
  path: String = "";
  
  constructor(
    private newsService: NewsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.path = environment.apiUrl;
    this.news = await this.newsService.find({}).toPromise();
    this.left = this.news.filter( x => x.slide === 'left');
    this.news = this.news.filter( x => x.slide === 'right');
  }

}
