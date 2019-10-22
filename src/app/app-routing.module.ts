import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { LayoutComponent } from './Layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FishingComponent } from './pages/fishing/fishing.component';
import { EventsComponent } from './pages/events/events.component';
import { FishComponent } from './pages/fish/fish.component';
import { FishInfoComponent } from './pages/fish/fish-info/fish-info.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'fishing', component: FishingComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'fish', component: FishComponent, canActivate: [AuthGuard] },
  { path: 'fish/:id', component: FishInfoComponent, canActivate: [AuthGuard] },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
