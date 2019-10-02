import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService, ErrorService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthenticationService,
      private errorService: ErrorService,
      // private location: Location,
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
              console.log('Unauthorized 401');
              this.errorService.openErrorDialog(err.error.error);
              // auto logout if 401 response returned from api
              this.authService.logout();
              // this.location.reload(true);
            }

            const error = err.error.error || err.statusText;
            // const error = err.error.error
            this.errorService.openErrorDialog(error);
            return throwError(err);
        }));
    }
}
