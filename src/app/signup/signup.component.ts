import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any={
    fullname:"",
    email:"",
    password:""
  }
  
  constructor(public fb:FormBuilder, public auth:AuthservicesService,public router:Router) { }

  ngOnInit(): void {
  }

  signupForm= this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  adduser(){
    console.log(this.user)
    this.auth.addusers(this.user).subscribe({
      next: data => {
        console.log(data)
        this.router.navigate(['/signin'])
    },
    error: error => {
        console.error('There was an error!', error);
    }
  })
   
  }

}
