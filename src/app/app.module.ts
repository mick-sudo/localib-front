import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './users/users.service';
import { CarsComponent } from './cars/cars.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './location/location.component';
import { CarsFormComponent } from './cars-form/cars-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CarsComponent,
    NavbarComponent,
    UsersFormComponent,
    LocationComponent,
    CarsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
