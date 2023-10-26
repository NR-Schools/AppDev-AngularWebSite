import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dog } from '../../models/dog';
import { DogRecordService } from '../../services/dog-record.service';
import { ImageUtils } from 'src/app/utils/image-utils';

@Component({
	selector: 'app-view-dog-details',
	templateUrl: './view-dog-details.component.html',
	styleUrls: ['./view-dog-details.component.css'],
})
export class ViewDogDetailsComponent implements OnInit {
	dog: Dog;
	thumbnail: any;
	isAdoptButtonDisabled: boolean;
	dogAdoptString: string;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private dogRecordService: DogRecordService) {
		this.dog = Dog.NoDog();
		this.isAdoptButtonDisabled = false;
		this.dogAdoptString = "Available to Adopt";
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				const id: number = params['id'];
				this.dogRecordService.viewDogRecord(id).subscribe({
					next: (dog: Dog) => {
						this.dog = dog;

						// Convert Bytes to Image
						this.thumbnail = ImageUtils.base64ToImage(this.dog.photoBytes);

						if(this.dog.adoptRequested) {
							this.isAdoptButtonDisabled = true;
							this.dogAdoptString = "Requested for Adoption";
						}
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
		sendDog.photoBytes = undefined;

		this.dogRecordService.userDogAdopt(sendDog).subscribe({
			next: (value: Dog) => {
				if (value) {
					this.router.navigate(['/user']);
				}
			},
			error: (err: any) => {
				console.log(err);
			}
		});
	}
}
