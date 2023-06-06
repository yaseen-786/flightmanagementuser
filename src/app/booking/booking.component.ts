import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('datepicker') date? : ElementRef;
  currentDate: Date = new Date();
  
  source:any
  destination:any
  sourcelocation:any
  destinationlocation:any
  noofticket:any
  flightdate:any;
  //date:any
  nooftickets=[1,2,3,4,5,6,7,8,9,10]
constructor(private stuins:CustomerserviceService,private route:Router,private datePipe: DatePipe){}
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
  handleDateChange(event: any) {
    const selectedDate = event.value;
    console.log('Selected Date:', selectedDate);
   const formattedDate = this.datePipe.transform(selectedDate, 'dd-MM-yyyy');
   console.log('Formatted Date:', formattedDate);
   this.flightdate = formattedDate;
    // Perform further actions with the selected date
  }
  submit(reg:any){

    console.log(this.sourcelocation)
    console.log(this.destinationlocation)
    console.log(this.noofticket)
    console.log(this.flightdate);
    
    this.stuins.noft=this.noofticket
    this.stuins.getSelectedFlight(this.sourcelocation,this.destinationlocation,this.flightdate).subscribe((data: any)=>{
        console.log(data)
        this.stuins.flightdata = data
        this.route.navigate(['/showflight'])
    })
  }

}
