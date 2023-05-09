import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { CustomerComponent } from './customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ShowflightComponent } from './showflight/showflight.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,
    pathMatch:'full'
  },
  {
    path:'customer',
    component:CustomerComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterformComponent
  },
  {
    path:'login',
    component:LoginformComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },{
    path:'booking',
    component:BookingComponent
  },
  {
    path:'update',
    component:UpdateformComponent
  },
  {
    path:'showflight',
    component:ShowflightComponent
  },
  {
    path:'bookhistory',
    component:BookhistoryComponent
  },
  {
    path:'cancelbooking',
    component:CancelbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
