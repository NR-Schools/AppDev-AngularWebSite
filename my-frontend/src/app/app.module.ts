import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewDogDetailsComponent } from './components/view-dog-details/view-dog-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateDogRecordComponent } from './components/update-dog-record/update-dog-record.component';
import { AddDogRecordComponent } from './components/add-dog-record/add-dog-record.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UdDogItemComponent } from './components/user-dashboard/ud-dog-item/ud-dog-item.component';
import { AdminDogRequestsComponent } from './components/admin-dog-requests/admin-dog-requests.component';
import { AdDogItemComponent } from './components/admin-dashboard/ad-dog-item/ad-dog-item.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AdrDogAdoptItemComponent } from './components/admin-dog-requests/adr-dog-adopt-item/adr-dog-adopt-item.component';
import { UserDogRequestsComponent } from './components/user-dog-requests/user-dog-requests.component';
import { UdrDogAdoptItemComponent } from './components/user-dog-requests/udr-dog-adopt-item/udr-dog-adopt-item.component';

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
    AdminDogRequestsComponent,
    AdDogItemComponent,
    WelcomePageComponent,
    AdrDogAdoptItemComponent,
    UserDogRequestsComponent,
    UdrDogAdoptItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
