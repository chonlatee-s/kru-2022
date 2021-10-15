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
      { path: 'download', loadChildren: () => import('./pages/download/download.module').then(m => m.DownloadModule) },
      { path: 'stats', loadChildren: () => import('./pages/stats/stats.module').then(m => m.StatsModule) },
      { path: 'course', loadChildren: () => import('./pages/course/course.module').then(m => m.CourseModule) },
      { path: 'predict', loadChildren: () => import('./pages/predict/predict.module').then(m => m.PredictModule) },
      { path: 'forum', loadChildren: () => import('./pages/forum/forum.module').then(m => m.ForumModule) },
      { path: 'information', loadChildren: () => import('./pages/information/information.module').then(m => m.InformationModule) }
    ]
  },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'upload', loadChildren: () => import('./pages/upload-img/upload-img.module').then(m => m.UploadImgModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
