import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  isLoggedIn = new BehaviorSubject(false);
  private apiUrl = 'http://localhost:5000/api/Auth/login';
  private currentUser = JSON.parse(localStorage.getItem('@our-fishing:currentUser')) || {};

  constructor(private http: HttpClient) { }

  login( data ) {
    return this.http.post<any>(`${this.apiUrl}`, data)
      .pipe(map(user => {
        if (user.id && user.authToken) {
          this.setLoginState(true);
          this.currentUserValue = user;
        }
        return user;
      }));
  }

  logout() {
    this.clearCurrentUserValue();
    this.setLoginState(false);
  }

  // ---------------- Login State ----------------

  getLoginState() {
    return this.isLoggedIn;
  }

  setLoginState(bool) {
    this.isLoggedIn.next(bool);
  }

  // ---------------- Current User Value ---------------

  set currentUserValue(data) {
    this.currentUser = Object.assign(this.currentUser, data);
    localStorage.setItem('@our-fishing:currentUser', JSON.stringify(this.currentUser));
  }

  get currentUserValue() {
    return this.currentUser;
  }

  clearCurrentUserValue() {
    this.currentUser = {};
    localStorage.removeItem('@our-fishing:currentUser');
  }

}
