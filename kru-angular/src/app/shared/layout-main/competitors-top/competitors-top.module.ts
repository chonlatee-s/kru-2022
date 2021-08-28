import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CompetitorsTopComponent } from './competitors-top.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CompetitorsTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AvatarModule,
    ButtonModule
  ],
  exports: [CompetitorsTopComponent]
})
export class CompetitorsTopModule { }
