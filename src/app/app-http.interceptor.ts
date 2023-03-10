import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  userToken: any;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let data = JSON.parse(localStorage.getItem('currentUser') as string);
    this.userToken = data.response.token

    const modifiedReq = request.clone({
      headers: request.headers.set('Authorization', `Token ${this.userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
