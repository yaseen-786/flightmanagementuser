import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  source:any
  destination:any
  sourcelocation:any
  destinationlocation:any
  noofticket:any
  nooftickets=[1,2,3,4,5,6,7,8,9,10]
constructor(private stuins:CustomerserviceService,private route:Router){}
  ngOnInit(): void {
    this.stuins.getSource().subscribe((data)=>{
      //console.log(data)
      this.source=data
    })
    this.stuins.getDestination().subscribe((data)=>{
      //console.log(data)
      this.destination=data
    })
  }
  submit(reg:any){

    console.log(this.sourcelocation)
    console.log(this.destinationlocation)
    console.log(this.noofticket)
    this.stuins.noft=this.noofticket
    this.stuins.getSelectedFlight(this.sourcelocation,this.destinationlocation).subscribe((data)=>{
        console.log(data)
        this.stuins.flightdata = data
        this.route.navigate(['/showflight'])
    })
  }

}
