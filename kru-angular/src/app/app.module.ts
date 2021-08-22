import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './shared/layout-main/layout-main.component';
import { HeaderComponent } from './shared/layout-main/header/header.component';

import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { NavMenuComponent } from './shared/layout-main/header/nav-menu/nav-menu.component';

import { DialogModule } from 'primeng/dialog';
import { ImgProfileComponent } from './shared/layout-main/header/img-profile/img-profile.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './shared/layout-main/menu/menu.component';
import { CompetitorsComponent } from './shared/layout-main/competitors/competitors.component';
import { FooterComponent } from './shared/layout-main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    HeaderComponent,
    NavMenuComponent,
    ImgProfileComponent,
    MenuComponent,
    CompetitorsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AvatarModule,
    TooltipModule,
    DialogModule,
    DividerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
