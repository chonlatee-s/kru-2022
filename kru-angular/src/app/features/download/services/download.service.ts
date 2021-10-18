import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { Download } from '../interfaces/download.interface';

@Injectable({
  providedIn: 'root'
})
export class DownloadService extends BaseService<Download, Download>{
  
  constructor(
    protected http: HttpClient,
    private router: Router,
  ) { super(http, '/download') }

}
