import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
@Injectable({
  providedIn: 'root'
})

export class StatsService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/stats') }

  async getStats(id: string) {
    return await this.http.get<any>(`${this.endpoint}/${id}`).toPromise();
  }

  async getTop5() {
    return await this.http.get<any>(`${this.endpoint}/competitor/top5`).toPromise();
  }
}
