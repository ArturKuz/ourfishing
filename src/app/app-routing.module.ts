import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  // { path: 'books', component: BooksPageComponent, canActivate: [AuthGuard]},
  // { path: 'detail/:id', component: BooksDetailsComponent, canActivate: [AuthGuard] },
  // { path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard] },
  // { path: 'edit-book/:id', component: EditBookComponent, canActivate: [AuthGuard] },
  { path: 'main', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
