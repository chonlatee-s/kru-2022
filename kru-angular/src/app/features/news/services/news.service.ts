import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { News } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<News, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/news') }

}
