import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewDogDetailsComponent } from './view-dog-details/view-dog-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateDogRecordComponent } from './update-dog-record/update-dog-record.component';
import { AddDogRecordComponent } from './add-dog-record/add-dog-record.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UdDogItemComponent } from './user-dashboard/ud-dog-item/ud-dog-item.component';
import { DogRequestsComponent } from './dog-requests/dog-requests.component';
import { AdDogItemComponent } from './admin-dashboard/ad-dog-item/ad-dog-item.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ViewDogDetailsComponent,
    AdminDashboardComponent,
    UpdateDogRecordComponent,
    SignupPageComponent,
    LoginPageComponent,
    AddDogRecordComponent,
    UdDogItemComponent,
    DogRequestsComponent,
    AdDogItemComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
