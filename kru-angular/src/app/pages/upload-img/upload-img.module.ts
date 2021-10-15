import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImgRoutingModule } from './upload-img-routing.module';
import { UploadImgComponent } from './upload-img.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UploadImgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UploadImgRoutingModule
  ]
})
export class UploadImgModule { }
