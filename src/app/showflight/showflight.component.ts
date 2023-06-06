import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})
export class ShowflightComponent implements OnInit {
  data: any
  order: any
  option: any
  payment:any

  constructor(private stuins: CustomerserviceService, private route: Router) { }
  ngOnInit(): void {
    this.data = this.stuins.flightdata
    console.log(this.data)
  }
  //  option = {
  //   "key": "rzp_test_1xpjWBPSJeZ7mc", // Enter the Key ID generated from the Dashboard
  //   "amount": "1000", // Amount is in currency subunits. Default currency is 
  //   "currency": "INR",
  //   "name": "Acme Corp",
  //   "description": "Test Transaction",
  //   "image": "https://example.com/your_logo",
  //   "order_id": "order_LvRTCjbnQqa6Ta", //This is a sample Order ID. Pass the 
  //   "handler": function (response:any){
  //   alert(response.razorpay_payment_id);
  //   alert(response.razorpay_order_id);
  //   alert(response.razorpay_signature)
  //   },
  //   "prefill": {
  //   "name": "",
  //   "email": "",
  //   "contact": ""
  //   },
  //   "notes": {
  //   "address": "Razorpay Corporate Office"
  //   },
  //   "theme": {
  //   "color": "#3399cc"
  //   }   
  // }


  getItemData(item: any) {
    console.log(item);
    this.stuins.flight = item;
    console.log(this.stuins.flight)
    console.log(this.stuins.noft)
    console.log(this.stuins.userdata)
    const bookdata = {
      "noofticket": this.stuins.noft,
    }
    //console.log("Hiiiiiiiiii")
    this.stuins.bookflight(this.stuins.userdata.custid, this.stuins.flight.flightid, bookdata).subscribe((data) => {
      //console.log("inside booking")
      //console.log(data)
      this.order = data
      //this.route.navigate(['payment'])

      this.option = {
        "key": "rzp_test_1xpjWBPSJeZ7mc", // Enter the Key ID generated from the Dashboard
        "amount": this.order.amount, // Amount is in currency subunits. Default currency is 
        "currency": "INR",
        "name": "CTAIR",
        "description": "Flight Booking",
        "image": "https://1000logos.net/air-india-logo/",
        "order_id": this.order.id, //This is a sample Order ID. Pass the 
        "redirect": "http://localhost:61653/",
        "handler": function (response: any) {

          //console.log(response)
          this.payment = {
            "paymentid": response.razorpay_payment_id
            ,
            "orderid": response.razorpay_order_id,
            "signature": response.razorpay_signature
          }
          console.log(this.payment)
          // this.booked=()=>{
          //   this.stuins.bookingid = this.payment
          //   console.log(this.stuins.bookingid)
          // }
          this.stuins.bookingid.next(this.payment);
          this.stuins.bookingid.subscribe((d: any) => {
            console.log(d);
          })

          // this.stuins.bookingid = this.payment.clo
          //alert(response.razorpay_order_id);
          //alert(response.razorpay_signature)
          //this.doingpayment()
          alert("Payment sucessfull!!!");

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
      console.log("payment --"+this.payment);
      
      let rzp = this.stuins.nativeWindow.Razorpay(this.option)
      rzp.open();

    })
    // this.stuins.sendingpaymentdata(this.order).subscribe((flag)=>{
    //     console.log(flag)
    //   })
    this.route.navigate(["payment"])

    //console.log(this.stuins.bookingid)
    // let rzp = this.stuins.nativeWindow.Razorpay(this.option)
    //rzp.open();
    // this.route.navigate(['homepage'])


    console.log(this.payment)
  }


  doingpayment() {
    this.stuins.sendingpaymentdata(this.order).subscribe((flag) => {
      console.log(flag)
    })
    console.log('hiii');
  }

  booked() {
    // this.stuins.bookingid = this.payment
    console.log(this.stuins.bookingid)
  }
}


export interface payment {
  "paymentid": string,
  "orderid": string,
  "signature": string
}
