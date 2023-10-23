import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../models/dog';
import { DogRecordService } from '../services/dog-record.service';

@Component({
	selector: 'app-dog-details',
	templateUrl: './dog-details.component.html',
	styleUrls: ['./dog-details.component.css'],
})
export class DogDetailsComponent implements OnInit {

	dog: Dog;

	constructor(private route: ActivatedRoute,
				private dogRecordService: DogRecordService) {
					this.dog = Dog.NoDog();
				}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
		  if (params['id'] !== undefined) {
			const id: number = params['id'];
			this.dogRecordService.viewDogRecord(id).subscribe({
				next: (dog: Dog) => {
					this.dog = dog;
				},
				error: (err: any) => {
					console.error(err);
				}
			});
	
		  } else {
			// this.navigated = false;
			// this.hero = new Hero();
		  }
		});	}
}
