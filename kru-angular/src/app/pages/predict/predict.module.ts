import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictRoutingModule } from './predict-routing.module';
import { PredictComponent } from './predict.component';
import { CompetitorsTopModule } from 'src/app/shared/layout-main/competitors-top/competitors-top.module';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    DividerModule,
    ProgressSpinnerModule
  ]
})
export class PredictModule { }
