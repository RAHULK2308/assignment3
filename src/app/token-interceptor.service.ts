import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthservicesService } from './services/authservices.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector,private authservice:AuthservicesService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authservice=this.injector.get(AuthservicesService);
    const authReq = req.clone({setHeaders: {Authorization: `Token ${authservice.getToken()}`}});
    return next.handle(authReq)
  }
  

}
