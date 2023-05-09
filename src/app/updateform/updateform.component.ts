import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent  implements OnInit{
  data:any
  constructor(private stuins:CustomerserviceService,private snack:MatSnackBar,private route:Router){
    
  }
  ngOnInit(): void {
    console.log(this.stuins.userdata)
  this.data=this.stuins.userdata
  }
  
  submit(reg:any){
    console.log(reg.value)
    // const flightinput={
    //   "name":reg.value.name,
    //   "source":reg.value.source,
    //   "destination":reg.value.destination,
    //   "date":reg.value.date,
    //   "price":reg.value.price,
    //   "capacity":reg.value.capacity,
    //   "duration":reg.value.duration
    // }
    const userdata={
      "name":reg.value.name,
      "username":reg.value.username,
      "password":reg.value.password,
      "email":reg.value.email,
      "phone":reg.value.phone
    }

    this.stuins.updateCustomer(userdata,this.data.custid).subscribe((data)=>{
      console.log(this.stuins.userdata)
    })

    this.snack.open('Customer Updated sucessfully !!!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });

    this.route.navigate(['/homepage'])




    }
    
}
