import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateDogRecordComponent } from './update-dog-record/update-dog-record.component';

@NgModule({
  declarations: [AppComponent, UserDashboardComponent, DogDetailsComponent, AdminDashboardComponent, UpdateDogRecordComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
