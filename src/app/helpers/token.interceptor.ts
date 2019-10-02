import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services';

@Injectable()

export class TokenInterceptor implements HttpInterceptor{

  constructor(private authService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = this.authService.currentUserValue;
    let clonedRequest;

    if (currentUser && currentUser.token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
        }
      });
    }

    clonedRequest = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      }
    });

    return next.handle(clonedRequest)
    .pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
          }
          return event;
      }));
  }

}
