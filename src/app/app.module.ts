
import { CustomerComponent} from './customer/customer.component';
import { LoginformComponent } from './loginform/loginform.component';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import { RegisterformComponent } from './registerform/registerform.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { MatSelectModule } from '@angular/material/select';
import { ShowflightComponent } from './showflight/showflight.component';
import { BookhistoryComponent } from './bookhistory/bookhistory.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
//import { MatIconRegistry } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavbarComponent,
    LoginformComponent,
    RegisterformComponent,
    HomepageComponent,
    BookingComponent,
    UpdateformComponent,
    ShowflightComponent,
    BookhistoryComponent,
    CancelbookingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
