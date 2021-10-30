import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule,
    CompetitorsTopModule,
    FormsModule,
    TableModule,
    ChartModule
  ]
})
export class StatsModule { }
