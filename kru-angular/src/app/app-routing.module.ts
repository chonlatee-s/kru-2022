import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';

const routes: Routes = [
  { 
    path: '', component: LayoutMainComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
      { path: 'job', loadChildren: () => import('./pages/job/job.module').then(m => m.JobModule) },
      { path: 'download', loadChildren: () => import('./pages/download/download.module').then(m => m.DownloadModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
