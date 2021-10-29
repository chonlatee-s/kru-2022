import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'exam/:type', component: ExamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
