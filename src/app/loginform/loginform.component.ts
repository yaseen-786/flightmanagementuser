import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
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

      "username":reg.value.username,
      "password":reg.value.password

    }
    this.stuins.validateCustomer(userdata).subscribe((data)=>{
      console.log(data)
      if(data==true){
        this.snack.open('Customer Login Sucessfull!!!', 'Close', {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.stuins.user=reg.value.username;
        this.stuins.getuserData().subscribe((data)=>{
          console.log(data);
          this.stuins.userdata=data
        })
        console.log(this.stuins.userdata)
        this.route.navigate(['homepage'])
      }
      else{
        this.snack.open('Invalid Customer!!!', 'Close', {
          duration: 1000,
          verticalPosition: 'top'
        });
        this.route.navigate(['customer'])
      }
    })

    




    }
    
}
