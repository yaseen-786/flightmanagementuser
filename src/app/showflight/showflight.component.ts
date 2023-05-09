import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-showflight',
  templateUrl: './showflight.component.html',
  styleUrls: ['./showflight.component.css']
})
export class ShowflightComponent implements OnInit {
  data:any
  constructor(private stuins:CustomerserviceService,private route:Router){}
  ngOnInit(): void {
    this.data = this.stuins.flightdata
    console.log(this.data)
  }
  getItemData(item:any){
    console.log(item);
    this.stuins.flight=item;
    console.log(this.stuins.flight)
    console.log(this.stuins.noft)
    console.log(this.stuins.userdata)
    const bookdata={
      "noofticket":this.stuins.noft,
    }
    this.stuins.bookflight(this.stuins.userdata.custid,this.stuins.flight.flightid,bookdata).subscribe((data)=>{
        console.log(data)
    })
    this.route.navigate(['homepage'])

    
  }

}
