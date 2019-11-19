import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FacebookApiService {

  options: LoginOptions = {
    scope: 'email,public_profile'
  };
  returnUrl: string;

  constructor(
    private fb: FacebookService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {

    const initParams: InitParams = {
      appId: '432523634223755',
      xfbml: true,
      version: 'v2.11'
    };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    fb.init(initParams);

  }

  loginWithFacebook(): void {
    this.fb.login(this.options)
      .then((response: LoginResponse) => {
        const token = response.authResponse.accessToken;
        this.authService.externalAuth(token).subscribe(
          res => {
            this.router.navigate(['/']);
          },
          error => {
            console.log('error', error.error.Errors[0].Message);
            this.router.navigate([this.returnUrl]);
          },
        );
      })
      .catch((error: any) => console.error(error));
  }
}
