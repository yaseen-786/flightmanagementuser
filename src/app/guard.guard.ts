import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerserviceService } from './customerservice.service';
import { CanActivateFn } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private serv:CustomerserviceService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const log = this.serv.loggedIn()
      if(!this.serv.loggedIn()){
        console.log(log);
        
      //console.log(localStorage.getItem('isloggedin'))
      this.route.navigate(['/login'])
     // console.log(state,route.url)
     console.log(ActivatedRouteSnapshot.caller);

     return false;
    }
    else{
      console.log(log);
      
      //console.log(ActivatedRouteSnapshot);
      
      //console.log(state,route.url)
      return true
    }
    
      
  }
  
}
