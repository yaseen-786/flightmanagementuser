import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {payment } from 'src/app/showflight/showflight.component'
import {environment} from 'src/environments/environment'

function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  user:any;
  userdata:any;
  flightdata:any;
  flight:any;
  noft:any;
  order:any;
  isloggedin:boolean = false;
  islog:any;
  flightcancel:any
  
  // bookingid:payment | undefined;
  bookingid = new Subject<payment>();
  constructor(private http:HttpClient ) { 
    //this.isloggedin = false;
  }

  get nativeWindow() : any {
    return _window();
 }

 loggedIn(){
  return this.isloggedin
 }

  registerCustomer(input:any){
    return this.http.post(`${environment.apiUrl}/users/customerregister`,input);
  }
  

  validateCustomer(input : any)
{
  //console.log(this.isloggedin)
  
  return this.http.post(`${environment.apiUrl}/users/validatecustomer`,input)
}

getuserData(){
  console.log(this.user);
  return this.http.get(`${environment.apiUrl}/users/getcust/`+this.user)
}
updateCustomer(input:any,id:number){
  return this.http.put(`${environment.apiUrl}/users/customerupdate/`+id,input)
}

getSource(){
  return this.http.get(`${environment.apiUrl}/getallsourcelocation`)
}
getDestination(){
  return this.http.get(`${environment.apiUrl}/getalldestinationlocation`)
}
getSelectedFlight(source:String,destination:String,date:String){
  return this.http.get(`${environment.apiUrl}/getdetails/`+source+"/"+destination+"/"+date)
}
bookflight(cid:number,fid:number,input:any){
  return this.http.post(`${environment.apiUrl}/bookflight/`+cid+"/"+fid,input)
}
getbookingofcustomer(){
  return this.http.get(`${environment.apiUrl}/booking/`+this.userdata.custid)
}
cancelbooking(id:number,fid:number,not:number){
  return this.http.delete(`${environment.apiUrl}/cancelflight/`+id+"/"+fid+"/"+not)
}
sendingpaymentdata(input:any){
  return this.http.post(`${environment.apiUrl}/book`,input)
}
}
