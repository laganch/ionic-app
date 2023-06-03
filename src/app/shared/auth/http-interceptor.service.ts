import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AsyncSubject, from, mergeMap, Observable, Observer, of} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {} as any;
    const token: string = this.authenticationService.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const handled: Observable<HttpEvent<any>> = of({})
      .pipe(mergeMap(token => {
        return next.handle(req.clone({setHeaders: headers}));
      }));

    const subject: AsyncSubject<HttpEvent<any>> = new AsyncSubject();
    console.log(subject)
    handled.subscribe(subject);
    subject.subscribe(async (event: HttpEvent<any>) => {
      if (event instanceof HttpErrorResponse) {
        if (event.status === 401) {
          // this.toasterService.error('Kindly login to your account again', 'Session has expired',{
          //   disableTimeOut: true
          // });
          return this.authenticationService.logout();
        }
      }
    }, async (err: HttpEvent<any>) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status < 1) {
          // this.toasterService.error('Please check your internet connection or contact support for assistance', 'Failed to contact server',{
          //   disableTimeOut: true
          // });
        } else if (err.status === 401) {
          // this.toasterService.error('Kindly login to your account again', 'Session has expired',{
          //   disableTimeOut: true
          // });
          return this.authenticationService.logout();

        } else if (err.status === 404) {
          return;
        }
      }
    });
    return Observable.create((obs: Observer<HttpEvent<any>>) => {
      subject.subscribe(obs);
      // next.handle(req);
    });
  }
}
