import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
  constructor(private stuins:CustomerserviceService,private snack:MatSnackBar,private route:Router){}
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
    this.stuins.registerCustomer(userdata).subscribe((data)=>{
      console.log(data)
    })

    this.snack.open('Customer Registered Sucessfully!!!', 'Close', {
      duration: 1000,
      verticalPosition: 'top'
    });

    this.route.navigate(['login'])




    }
    
    
    }

