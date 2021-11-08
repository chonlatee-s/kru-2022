import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FnService{
  
  constructor() {}

  converseDate(D: string) {
    const date = new Date(D).toISOString().split('T')[0];
    const day = date.split('-')[2];
    const month = Number(date.split('-')[1]);
    const year = Number(date.split('-')[0]);

    return `${day}/${month}/${year+543}`;
  }

}
