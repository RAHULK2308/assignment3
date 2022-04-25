import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  constructor(public http:HttpClient) { }

  addusers(data:any){
  return  this.http.post(" https://hiring-stackroots-server.herokuapp.com/auth/signup/user",data)
  }

  loginusers(data:any){
    return  this.http.post(" https://hiring-stackroots-server.herokuapp.com/auth/signin/user",data)
  }

  logout(){
    return this.http.post(" https://hiring-stackroots-server.herokuapp.com/auth/signout/user",{})
  }

  userLogged(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
