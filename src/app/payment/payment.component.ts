import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  order:any;
  constructor(private stuins:CustomerserviceService,private route:Router){
    console.log(this.stuins.bookingid)
  }
  ngOnInit(): void {
    
  }


    
  }


