import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isloggedin:boolean = true;
  islogout:boolean = false;
  isregistered:boolean = true;
  constructor(private router:Router,private serv:CustomerserviceService){}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/register') {
          this.isloggedin = true;
          this.isregistered = false;
          this.islogout= false;
        } else if (event.url == '/customer') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = true;
          this.isregistered = true;
          this.islogout= false;
        }
        else if (event.url == '/login') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= false;
        }
        else if (event.url == '/homepage') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }else if (event.url == '/update') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }else if (event.url == '/showflight') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }else if (event.url == '/bookhistory') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }else if (event.url == '/cancelbooking') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }else if (event.url == '/update') {
          // this.showLoginButton = true;
          // this.showLogoutButton = false;
          this.isloggedin = false;
          this.isregistered = false;
          this.islogout= true;
        }

      }
    });
  }
  logout(){
    // this.serv.isloggedin=false;
    // this.router.navigate(['/customer'])
    this.serv.isloggedin=false;
   // localStorage.setItem('isloggedin',this.serv.isloggedin)
    this.router.navigate(['/customer'])

  }
}
