import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { CustomerComponent } from './customer/customer.component';
import { GuardGuard } from './guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedinGuard } from './loggedin.guard';
import { LoginformComponent } from './loginform/loginform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
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
    //canActivate:[LoggedinGuard],
    component:LoginformComponent
  },
  {
    path:'homepage',
    canActivate:[GuardGuard],
    component:HomepageComponent
  },{
    path:'booking',
    canActivate:[GuardGuard],
    component:BookingComponent
  },
  {
    path:'update',
    canActivate:[GuardGuard],
    component:UpdateformComponent
  },
  {
    path:'showflight',
    canActivate:[GuardGuard],
    component:ShowflightComponent
  },
  {
    path:'bookhistory',
    canActivate:[GuardGuard],
    component:BookhistoryComponent
  },
  {
    path:'cancelbooking',
    canActivate:[GuardGuard],
    component:CancelbookingComponent
  },{
    path:'payment',
    component:PaymentComponent
  },{
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
