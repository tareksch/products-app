import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      url: this.completeUrl(request.url)
  });
  return next.handle(clonedRequest);
  }

  private completeUrl(url: string) {
    if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
        return url;
    } else {
        return environment.BASE_URL + url;
    }
}
}
