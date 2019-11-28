import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthenticationService,
      private alertService: AlertService,
      private router: Router,
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let error;
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
              this.authService.logout();
              this.router.navigate(['/']);
            }

            err.error ? error = err.error.Errors[0].Message :
            err.message ? error = err.message :
            err.statusText ? error = err.statusText : error = 'Unknown error';

            this.alertService.error(error);
            return throwError(err);
        }));
    }
}
