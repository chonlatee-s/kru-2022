import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { UpdateMajor } from '../interfaces/profile.interface';
@Injectable({
  providedIn: 'root'
})

export class ProfileService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/user') }

  async myprofile(uuId: string) {
    return await this.http.get<any>(`${this.endpoint}/myprofile/${uuId}`).toPromise();
  }

  async updateMajor(data: UpdateMajor) {
    return await this.http.put<any>(`${this.endpoint}/updatemajor`, data).toPromise();
  }

}
