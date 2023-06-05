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
    this.order = this.stuins.order
  }
  ngOnInit(): void {
    this.order = this.stuins.order
    console.log(this.order)
    let rzp = this.stuins.nativeWindow.Razorpay(this.option)
     rzp.open();
  //this.route.navigate(['homepage'])
  }
  option = {
    "key": "rzp_test_1xpjWBPSJeZ7mc", // Enter the Key ID generated from the Dashboard
   // "amount": this.order.amount, // Amount is in currency subunits. Default currency is 
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    //"order_id": this.order.id, //This is a sample Order ID. Pass the 
    "handler": function (response:any){
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);
    alert(response.razorpay_signature)
    },
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": "Razorpay Corporate Office"
    },
    "theme": {
    "color": "#3399cc"
    }   
  }
  
  
   

    
  }


