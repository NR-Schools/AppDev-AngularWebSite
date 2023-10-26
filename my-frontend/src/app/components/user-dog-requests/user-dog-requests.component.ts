import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';

@Component({
  selector: 'app-user-dog-requests',
  templateUrl: './user-dog-requests.component.html',
  styleUrls: ['./user-dog-requests.component.css'],
})
export class UserDogRequestsComponent implements OnInit {
  dogItemWithReqs?: Array<Dog>;

  constructor(private dogRecordService: DogRecordService) {}

  ngOnInit(): void {
    this.dogRecordService.userViewAllDogAdoptReq().subscribe({
      next: (value: Array<Dog>) => {
        this.dogItemWithReqs = value;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
