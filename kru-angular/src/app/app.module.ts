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

import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
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
    ButtonModule,
    
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('413443577640-cuq0u63d2qgudd7ml02uooatg4ndmveg.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('5208278095855396')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    ConfirmationService,
    MessageService

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
