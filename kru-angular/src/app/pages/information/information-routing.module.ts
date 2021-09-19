import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PoliciesComponent } from './policies/policies.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'policies', component: PoliciesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
