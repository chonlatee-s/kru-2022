import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule  } from 'primeng/avatargroup';
import { MajorsComponent } from './majors/majors.component';
import { MajorComponent } from './major/major.component';
@NgModule({
  declarations: [
    MajorsComponent,
    MajorComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    AvatarGroupModule
  ]
})
export class ForumModule { }
