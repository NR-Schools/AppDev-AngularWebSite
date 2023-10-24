import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DogRecordService } from '../../services/dog-record.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../../models/dog';
import { ImageUtils } from '../../utils/image-utils';

@Component({
	selector: 'app-update-dog-record',
	templateUrl: './update-dog-record.component.html',
	styleUrls: ['./update-dog-record.component.css']
})
export class UpdateDogRecordComponent implements OnInit {
	constructor(private formBuilder: FormBuilder,
		private dogRecordService: DogRecordService,
		private route: ActivatedRoute) { }

	dogId?: number;
	updateDogName?: string;
	updateDogImage?: any;
	updateDogDescription?: string;

	updateDogPreviewImage: any;

	updateDogFormGroup = this.formBuilder.group({
		Breed: ['', Validators.required],
		Age: [0, Validators.required],
		Sex: ['', Validators.required],
		Color: ['', Validators.required],
		ArrivedDate: [new Date(), Validators.required],
		ArrivedFrom: ['', Validators.required],
		Size: ['', Validators.required],
		Location: ['', Validators.required],
	});

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				const id: number = params['id'];
				this.dogId = id;
				this.dogRecordService.viewDogRecord(id).subscribe({
					next: (dog: Dog) => {
						this.updateDogName = dog.name;
						this.updateDogImage = dog.photoBytes;
						this.updateDogDescription = dog.description;

						const initialValues = {
							Breed: dog.breed,
							Age: dog.age,
							Sex: dog.sex,
							Color: dog.colorCoat,
							ArrivedDate: dog.arrivedDate,
							ArrivedFrom: dog.arrivedFrom,
							Size: dog.size,
							Location: dog.location,
						};

						// Set the initial values for the form controls
						this.updateDogFormGroup.setValue(initialValues);

						// Attempt to display image
						this.updateDogPreviewImage = ImageUtils.byteArrayToImageDataUrl(this.updateDogImage);
					},
					error: (err: any) => {
						console.error(err);
					}
				});

			}
		});
	}

	onImageSelected(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			let selectedFile = inputElement.files[0];
			console.log(selectedFile);

			ImageUtils.fileToByteArray(selectedFile)
				.then((byteArray) => {
					this.updateDogImage = byteArray;
					this.updateDogPreviewImage = ImageUtils.byteArrayToImageDataUrl(byteArray);
				})
				.catch((error) => {
					console.log('Error reading file:', error);
				});
		}
	}

	onUpdateDogRecord() {
		// Check if Dog has a name and form is achieved
		if (typeof this.updateDogName !== 'string' || this.updateDogName.trim() === '') {
			window.alert("No name supplied for dog");
			return;
		}

		// Send Info to Server
		let newDog: Dog = new Dog(
			this.updateDogName!.trim(),
			this.updateDogFormGroup.get("Breed")?.value as string,
			this.updateDogFormGroup.get("Age")?.value as unknown as number,
			this.updateDogFormGroup.get("Sex")?.value as string,
			this.updateDogFormGroup.get("Color")?.value as string,
			this.updateDogFormGroup.get("ArrivedDate")?.value as unknown as Date,
			this.updateDogFormGroup.get("ArrivedFrom")?.value as string,
			this.updateDogFormGroup.get("Size")?.value as string,
			this.updateDogFormGroup.get("Location")?.value as string
		)

		if (this.updateDogDescription !== null && this.updateDogDescription !== undefined) {
			newDog.description = this.updateDogDescription!.trim();
		}

		if (this.updateDogImage !== null && this.updateDogImage !== undefined) {
			newDog.photoBytes = this.updateDogImage;
		}

		console.log(newDog)

		this.dogRecordService.updateDogRecord(this.dogId!, newDog).subscribe({
			next: (value: boolean) => {
				console.log(value);
			},
			error: (err: any) => {
				console.log(err);
			}
		});
	}
}
