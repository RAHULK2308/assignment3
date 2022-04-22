import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from '../services/authservices.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

user:any={
    email:"",
password:""
}
  constructor(private fb:FormBuilder,private auth:AuthservicesService,private router:Router) { }

  ngOnInit(): void {
  }
  signinForm= this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  accesstoken:any;
  login(){
    console.log(this.user)
    this.auth.loginusers(this.user).subscribe({
      next: (Data:any) => {
 
      localStorage.setItem('token', Data.data.user.accessToken)
      this.router.navigate(['/home'])
  },
  error: error => {
      console.error('There was an error!', error);
  }
    })
  }



}
