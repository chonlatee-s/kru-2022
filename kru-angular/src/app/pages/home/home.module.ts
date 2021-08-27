import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {CarouselModule} from 'primeng/carousel';
import { CompetitorsRowComponent } from 'src/app/shared/layout-main/competitors-row/competitors-row.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
    CompetitorsRowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    AvatarModule,
    ButtonModule
  ]
})
export class HomeModule { }
