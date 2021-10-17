import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { Stats } from '../interfaces/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class StatsService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient,
    private router: Router,
  ) { super(http, '/stats') }

  async getStats(id: string) {
    return await this.http.get<any>(`${this.endpoint}/${id}`).toPromise();
  }
}
