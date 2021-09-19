import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DividerModule } from 'primeng/divider';
import { SupportComponent } from './support/support.component';
import { InfoFooterComponent } from './info-footer/info-footer.component';
import { PoliciesComponent } from './policies/policies.component';
import { CookiesComponent } from './cookies/cookies.component';
@NgModule({
  declarations: [
    ContactComponent,
    SupportComponent,
    InfoFooterComponent,
    PoliciesComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    DividerModule
  ],
  exports: [
    InfoFooterComponent
  ]
})
export class InformationModule { }
