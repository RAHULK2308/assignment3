import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from '../services/authservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthservicesService,private router:Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(['/'])
  }

}
