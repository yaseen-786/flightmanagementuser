import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  user:any;
  userdata:any;
  flightdata:any;
  flight:any;
  noft:any
  constructor(private http:HttpClient) { }

  registerCustomer(input:any){
    return this.http.post("http://localhost:8082/users/customerregister",input);
  }

  validateCustomer(input : any)
{
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
getSelectedFlight(source:String,destination:String){
  return this.http.get("http://localhost:8082/getdetails/"+source+"/"+destination)
}
bookflight(cid:number,fid:number,input:any){
  return this.http.post("http://localhost:8082/bookflight/"+cid+"/"+fid,input)
}
getbookingofcustomer(){
  return this.http.get("http://localhost:8082/booking/"+this.userdata.custid)
}
cancelbooking(id:number){
  return this.http.delete("http://localhost:8082/cancelflight/"+id)
}
}
