import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
