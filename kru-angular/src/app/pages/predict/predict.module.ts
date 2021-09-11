import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictRoutingModule } from './predict-routing.module';
import { PredictComponent } from './predict.component';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    PredictComponent
  ],
  imports: [
    CommonModule,
    PredictRoutingModule,
    CompetitorsTopModule,
    StepsModule,
    CardModule,
    DividerModule
  ]
})
export class PredictModule { }
