import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
booking:any
constructor(private stuins:CustomerserviceService){}
  ngOnInit(): void {
    this.stuins.getbookingofcustomer().subscribe((data)=>{
        console.log(data)
        this.booking = data
    })
  }

}
