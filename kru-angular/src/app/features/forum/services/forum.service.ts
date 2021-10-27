import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Forum } from '../interfaces/forum.interface';

@Injectable({
  providedIn: 'root'
})
export class ForumService extends BaseService<Forum, unknown>{
  
  constructor(
    protected http: HttpClient
  ) { super(http, '/forum') }

}
