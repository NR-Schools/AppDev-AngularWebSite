import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog';
import { DogRecordService } from '../services/dog-record.service';

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
	dogs: Dog[] = [];

	constructor(private dogRecordService: DogRecordService) { }

	ngOnInit(): void {
		this.dogRecordService.viewAllDogRecords().subscribe((data: Dog[]) => {
			this.dogs = data;
		});
	}
}
