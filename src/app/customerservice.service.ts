import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {payment } from 'src/app/showflight/showflight.component'


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
  url:String = "http://localhost:8081/"
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
    return this.http.post(this.url+"users/customerregister",input);
  }
  

  validateCustomer(input : any)
{
  //console.log(this.isloggedin)
  
  return this.http.post(this.url+"users/validatecustomer",input)
}

getuserData(){
  console.log(this.user);
  return this.http.get(this.url+"users/getcust/"+this.user)
}
updateCustomer(input:any,id:number){
  return this.http.put(this.url+"users/customerupdate/"+id,input)
}

getSource(){
  return this.http.get(this.url+"getallsourcelocation")
}
getDestination(){
  return this.http.get(this.url+"getalldestinationlocation")
}
getSelectedFlight(source:String,destination:String,date:String){
  return this.http.get(this.url+"getdetails/"+source+"/"+destination+"/"+date)
}
bookflight(cid:number,fid:number,input:any){
  return this.http.post(this.url+"bookflight/"+cid+"/"+fid,input)
}
getbookingofcustomer(){
  return this.http.get(this.url+"booking/"+this.userdata.custid)
}
cancelbooking(id:number,fid:number,not:number){
  return this.http.delete(this.url+"cancelflight/"+id+"/"+fid+"/"+not)
}
sendingpaymentdata(input:any){
  return this.http.post(this.url+"book",input)
}
}
