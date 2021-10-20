import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})

export class PredictService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/predict') }

  async getPredict() {
    return await this.http.get<any>(`${this.endpoint}`).toPromise();
  }
}
