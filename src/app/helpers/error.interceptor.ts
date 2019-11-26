import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService, MessageService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthenticationService,
      private messageService: MessageService,
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

            this.messageService.openPopUp(error);
            return throwError(err);
        }));
    }
}
