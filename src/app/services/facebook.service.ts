import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';


@Injectable({
  providedIn: 'root'
})
export class FacebookApiService {
  options: LoginOptions = {
    scope: 'email,public_profile'
  };
  constructor(private fb: FacebookService) {

    const initParams: InitParams = {
      appId: '432523634223755',
      xfbml: true,
      version: 'v2.11'
    };

    fb.init(initParams);

  }

  loginWithFacebook(): void {
    this.fb.login(this.options)
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }
}
