import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImgComponent } from './upload-img.component';

const routes: Routes = [{ path: '', component: UploadImgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadImgRoutingModule { }
