import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MajorComponent } from './major/major.component';
import { MajorsComponent } from './majors/majors.component';

const routes: Routes = [
  { path: '', component: MajorsComponent },
  { path: 'major', component: MajorComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
