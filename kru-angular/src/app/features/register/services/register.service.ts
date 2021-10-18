import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { Stats } from '../../stats/interfaces/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient,
    private router: Router,
  ) { super(http, '/major') }

  async getMajor() {
    return await this.http.get<any>(`${this.endpoint}`).toPromise();
  }

}