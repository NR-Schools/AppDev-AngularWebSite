import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DogRecordService } from '../../services/dog-record.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dog } from '../../models/dog';
import { ImageUtils } from '../../utils/image-utils';

@Component({
	selector: 'app-update-dog-record',
	templateUrl: './update-dog-record.component.html',
	styleUrls: ['./update-dog-record.component.css']
})
export class UpdateDogRecordComponent implements OnInit {

	dogId?: number;
	updateDogName?: string;
	updateDogImage?: any;
	isDogImageUpdated: boolean;
	updateDogDescription?: string;
	updateDogPreviewImage: any;

	dogAdoptString: string;

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

	constructor(private formBuilder: FormBuilder,
		private dogRecordService: DogRecordService,
		private activeRoute: ActivatedRoute,
		private router: Router) {
			this.isDogImageUpdated = false;
			this.dogAdoptString = "Available to Adopt";
		}

	ngOnInit(): void {
		this.activeRoute.params.forEach((params: Params) => {
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
						this.updateDogPreviewImage = ImageUtils.base64ToImage(this.updateDogImage);

						if (dog.adoptRequested) {
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

	onImageSelected(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			const selectedFile = inputElement.files[0];

			ImageUtils.fileToByteArray(selectedFile)
				.then((byteArray) => {
					this.updateDogImage = selectedFile;
					this.updateDogPreviewImage = ImageUtils.byteArrayToImage(byteArray);
					this.isDogImageUpdated = true;
				})
				.catch((error) => {
					window.alert("Cannot read uploaded image!");
					console.error('Error reading file:', error);
				});
		}
	}

	onUpdateDogRecord(): void {
		// Check if Dog has a name and form is achieved
		if (typeof this.updateDogName !== 'string' || this.updateDogName.trim() === '') {
			window.alert("No name supplied for dog");
			return;
		}

		// Send Info to Server
		let updatedDog: Dog = new Dog(
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
			updatedDog.description = this.updateDogDescription!.trim();

			if (updatedDog.description!.length > 350) {
				window.alert("Description Too Long!");
				return;
			}
		}

		if (this.updateDogImage !== null && this.updateDogImage !== undefined && this.isDogImageUpdated) {
			updatedDog.photoBytes = this.updateDogImage;
			updatedDog.isPhotoUpdated = true;
		}

		this.dogRecordService.updateDogRecord(this.dogId!, updatedDog).subscribe({
			next: (value: Dog) => {
				if (value !== null) {
					this.router.navigate(['/admin']);
				}
			},
			error: (err: any) => {
				console.error(err);
			}
		});
	}
}
