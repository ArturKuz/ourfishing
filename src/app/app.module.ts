import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { SliderComponent } from './ui/slider/slider.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    InlineSVGModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [
    ConfigurationService,
    ConfigModule.init(),
    AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
