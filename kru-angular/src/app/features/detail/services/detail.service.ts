import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Detail } from '../interfaces/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailService extends BaseService<Detail, Detail>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/detail') }

}
