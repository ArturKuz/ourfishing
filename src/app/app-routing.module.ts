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

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'fishing', component: FishingComponent },
  { path: 'events', component: EventsComponent },
  { path: 'fish', component: FishComponent },
  { path: 'fish/:id', component: FishInfoComponent },


  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
