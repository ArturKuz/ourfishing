import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';


@Injectable({
  providedIn: 'root'
})
export class FacebookApiService {

  constructor(private fb: FacebookService) {

    const initParams: InitParams = {
      appId: '432523634223755',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));

  }
}
