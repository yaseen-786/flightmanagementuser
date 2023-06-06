import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private stuins:CustomerserviceService,private route:Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.stuins.islog)
    this.stuins.islog = true;
    
  }
updatedata(){
  this.route.navigate(['/login'])
}
}
