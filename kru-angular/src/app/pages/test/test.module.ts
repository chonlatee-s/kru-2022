import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ButtonModule } from 'primeng/button';
import { ExamComponent } from './exam/exam.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
@NgModule({
  declarations: [
    TestComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    ButtonModule,
    ProgressBarModule,
    DividerModule,
    TooltipModule,
    CardModule,
    ProgressSpinnerModule,
    SidebarModule,
    DialogModule,
    TableModule,
    AvatarModule,
    MessagesModule,
    MessageModule,
    SkeletonModule
  ]
})
export class TestModule { }
