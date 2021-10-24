import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule  } from 'primeng/avatargroup';
import { MajorComponent } from './major/major.component';
import { ChatComponent } from './chat/chat.component';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MajorComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    AvatarGroupModule,
    DividerModule,
    ChipModule,
    SidebarModule,
    FormsModule,
  ]
})
export class ForumModule { }
