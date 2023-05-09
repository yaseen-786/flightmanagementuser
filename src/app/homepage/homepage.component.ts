import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private stuins:CustomerserviceService,private route:Router){}
updatedata(){
  this.route.navigate(['/update'])
}
}
