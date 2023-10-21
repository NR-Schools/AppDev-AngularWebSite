import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { DogRecordService } from '../services/dog-record.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogRecordService: DogRecordService) {}

  ngOnInit(): void {
    this.dogRecordService.viewAllDogRecords().subscribe((data: Dog[]) => {
      this.dogs = data;
    });
  }
}
