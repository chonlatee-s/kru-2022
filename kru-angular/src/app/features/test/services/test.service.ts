import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Exam } from '../interfaces/exam.service';
@Injectable({
  providedIn: 'root'
})

export class TestService extends BaseService<unknown, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/exam') }

  async getExam(type: string) {
    return await this.http.get<any>(`${this.endpoint}/test/${type}`).toPromise();
  }
  async checkScore(data: any) {
    return await this.http.post<any>(`${this.endpoint}/test/answer`, data).toPromise();
  }
  async changeQuestion(num: number) {
    return await this.http.get<any>(`${this.endpoint}/test/change/${num}`).toPromise();
  }
}
