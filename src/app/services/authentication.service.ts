import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigurationService } from './configuration.service';
import { Login } from '../models/login';



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  isLoggedIn = new BehaviorSubject(false);

  private apiUrl: string;
  private apiFBEndpoint: string;
  private apiLoginEndpoint: string;
  private currentUser = JSON.parse(localStorage.getItem('@our-fishing:currentUser')) || {};

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService) {

  }

  login( data ) {
    this.getEndpoints();
    return this.http.post<Login>(this.apiLoginEndpoint, data)
      .pipe(map(res => {
        this.setUserToStorage(res);
        return res;
      }));
  }

  externalAuth(token: string) {
    this.getEndpoints();
    return this.http.post<Login>( this.apiFBEndpoint, {accessToken: token})
    .pipe(map(res => {
      this.setUserToStorage(res);
      return res;
    }));
  }

  getEndpoints() {
    this.apiUrl = this.configService.getApiBaseUrl();
    this.apiLoginEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('LOGIN')}`;
    this.apiFBEndpoint = `${this.apiUrl}${this.configService.getApiEndpoint('FACEBOOK')}`;
  }

  setUserToStorage(res: Login) {
    if (res && res.token.authToken) {
      this.setLoginState(true);
      this.currentUserValue = res.token;
    }
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
