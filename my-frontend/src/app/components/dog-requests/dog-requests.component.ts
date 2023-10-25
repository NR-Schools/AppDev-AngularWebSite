import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';

@Component({
	selector: 'app-dog-requests',
	templateUrl: './dog-requests.component.html',
	styleUrls: ['./dog-requests.component.css']
})
export class DogRequestsComponent implements OnInit {

	dogItemWithReqs?: Array<Dog>;

	constructor(private dogRecordService: DogRecordService) {}

	ngOnInit(): void {
		this.dogRecordService.adminViewAllDogAdoptReq().subscribe({
			next: (value: Array<Dog>) => {
				console.log(value);
				this.dogItemWithReqs = value;
			},
			error: (err: any) => {
				console.log(err);
			}
		})
	}
}
