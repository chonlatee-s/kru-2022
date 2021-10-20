import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Download } from '../interfaces/download.interface';
@Injectable({
  providedIn: 'root'
})

export class DownloadService extends BaseService<Download, Download>{
  
  constructor(
    protected http: HttpClient,
  ) { super(http, '/download') }

}
