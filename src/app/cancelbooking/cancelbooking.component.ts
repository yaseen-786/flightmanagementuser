import { Component, OnInit } from '@angular/core';
import { SanityChecks } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {
  booking:any
  constructor(private stuins:CustomerserviceService,private snac:MatSnackBar,private route:Router){}
    ngOnInit(): void {
      this.stuins.getbookingofcustomer().subscribe((data)=>{
          console.log(data)
          this.booking = data
      })
    }
    getItemData(item:any){
      console.log(item);
      this.stuins.cancelbooking(item.bookid).subscribe((data)=>{
          console.log(data)

      })
      this.snac.open('Flight Canceled Sucessfull!!!', 'Close', {
        duration: 1000,
        verticalPosition: 'top'
      });
      this.route.navigate(['/homepage'])


    }
  
}
