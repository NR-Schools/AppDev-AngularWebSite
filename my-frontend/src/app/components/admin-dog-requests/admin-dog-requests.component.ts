import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';

@Component({
	selector: 'app-admin-dog-requests',
	templateUrl: './admin-dog-requests.component.html',
	styleUrls: ['./admin-dog-requests.component.css']
})
export class AdminDogRequestsComponent implements OnInit {

	dogItemWithReqs?: Array<Dog>;

	constructor(private dogRecordService: DogRecordService) {}

	ngOnInit(): void {
		this.dogRecordService.adminViewAllDogAdoptReq().subscribe({
			next: (value: Array<Dog>) => {
				this.dogItemWithReqs = value;
			},
			error: (err: any) => {
				console.error(err);
			}
		});
	}

	onItemsReload(): void {
		this.dogRecordService.adminViewAllDogAdoptReq().subscribe({
			next: (value: Array<Dog>) => {
				this.dogItemWithReqs = value;
			},
			error: (err: any) => {
				console.error(err);
			}
		});
	}
}
