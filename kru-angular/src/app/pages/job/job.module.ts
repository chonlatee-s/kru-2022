import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { TableModule } from 'primeng/table';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    TableModule,
    CompetitorsTopModule,
    MessagesModule
  ]
})
export class JobModule { }
