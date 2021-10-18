import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { Job } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseService<Job, Job>{
  
  constructor(
    protected http: HttpClient,
    private router: Router,
  ) { super(http, '/job') }

}
