import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../../models/dog';
import { DogRecordService } from '../../services/dog-record.service';

@Component({
	selector: 'app-view-dog-details',
	templateUrl: './view-dog-details.component.html',
	styleUrls: ['./view-dog-details.component.css'],
})
export class ViewDogDetailsComponent implements OnInit {
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

			}
		});
	}

	onDogAdopt(): void {
		// Get Dog
		// Create New Dog Adopt Under this user
		let sendDog: Dog = this.dog;
		sendDog.photoBytes = null;

		this.dogRecordService.userDogAdopt(sendDog).subscribe({
			next: (value: Dog) => {
				console.log(value);
			},
			error: (err: any) => {
				console.log(err);
			}
		});
	}
}
