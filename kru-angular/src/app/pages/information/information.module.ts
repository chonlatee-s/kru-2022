import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DividerModule } from 'primeng/divider';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    ContactComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    DividerModule
  ]
})
export class InformationModule { }
