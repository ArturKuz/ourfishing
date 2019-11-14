import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material-module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SliderComponent } from './ui/slider/slider.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './ui/cards/cards.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LayoutComponent } from './Layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { FishingComponent } from './pages/fishing/fishing.component';
import { EventsComponent } from './pages/events/events.component';
import { ConfigModule, ConfigurationService } from './services/configuration.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrowComponent } from './ui/arrow/arrow.component';
import { ProgressComponent } from './ui/progress/progress.component';
import { ErrorComponent } from './ui/dialogs/error/error.component';
import { ErrorService, AuthenticationService, UserService } from './services';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { TokenInterceptor } from './helpers/token.interceptor';
import { SuccessComponent } from './ui/dialogs/success/success.component';
import { SuccessService } from './services/success.service';
import { FishComponent } from './pages/fish/fish.component';
import { FishInfoComponent } from './pages/fish/fish-info/fish-info.component';
import { FishService } from './services/fish.service';
import { HeadersSizeService } from './services/headers-size.service';
import { PaginatorComponent } from './ui/paginator/paginator.component';
import { FacebookModule } from 'ngx-facebook';
import { FacebookApiService } from './services/facebook.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    CardsComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NotFoundComponent,
    ProfileComponent,
    TopMenuComponent,
    FishingComponent,
    EventsComponent,
    ArrowComponent,
    ProgressComponent,
    ErrorComponent,
    SuccessComponent,
    FishComponent,
    FishInfoComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    InlineSVGModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SwiperModule,
    FacebookModule.forRoot()
  ],
  entryComponents: [
    ErrorComponent,
    SuccessComponent,
  ],
  providers: [
    ConfigurationService,
    ConfigModule.init(),
    AuthGuard,
    ErrorService,
    SuccessService,
    AuthenticationService,
    UserService,
    FishService,
    HeadersSizeService,
    FacebookApiService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
