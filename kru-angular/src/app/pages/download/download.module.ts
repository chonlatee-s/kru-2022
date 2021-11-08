import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { TableModule } from 'primeng/table';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    DownloadRoutingModule,
    TableModule,
    CompetitorsTopModule,
    MessagesModule
  ]
})
export class DownloadModule { }
