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
    return this.http.post("http://localhost:8082/users/customerregister",input);
  }
  

  validateCustomer(input : any)
{
  //console.log(this.isloggedin)
  
  return this.http.post("http://localhost:8082/users/validatecustomer",input)
}

getuserData(){
  console.log(this.user);
  return this.http.get("http://localhost:8082/users/getcust/"+this.user)
}
updateCustomer(input:any,id:number){
  return this.http.put("http://localhost:8082/users/customerupdate/"+id,input)
}

getSource(){
  return this.http.get("http://localhost:8082/getallsourcelocation")
}
getDestination(){
  return this.http.get("http://localhost:8082/getalldestinationlocation")
}
getSelectedFlight(source:String,destination:String,date:String){
  return this.http.get("http://localhost:8082/getdetails/"+source+"/"+destination+"/"+date)
}
bookflight(cid:number,fid:number,input:any){
  return this.http.post("http://localhost:8082/bookflight/"+cid+"/"+fid,input)
}
getbookingofcustomer(){
  return this.http.get("http://localhost:8082/booking/"+this.userdata.custid)
}
cancelbooking(id:number,fid:number,not:number){
  return this.http.delete("http://localhost:8082/cancelflight/"+id+"/"+fid+"/"+not)
}
sendingpaymentdata(input:any){
  return this.http.post("http://localhost:8082/book",input)
}
}
