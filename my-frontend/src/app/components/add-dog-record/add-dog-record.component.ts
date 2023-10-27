import { Component } from '@angular/core';
import { DogRecordService } from '../../services/dog-record.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Dog } from '../../models/dog';
import { ImageUtils } from '../../utils/image-utils';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-dog-record',
	templateUrl: './add-dog-record.component.html',
	styleUrls: ['./add-dog-record.component.css'],
})
export class AddDogRecordComponent {
	addDogName?: string;
	addDogImage?: any;
	addDogDescription?: string;
	addDogPreviewImage: any;

	addDogFormGroup = this.formBuilder.group({
		Breed: ['', Validators.required],
		Age: [0, Validators.required],
		Sex: ['', Validators.required],
		Color: ['', Validators.required],
		ArrivedDate: ['', Validators.required],
		ArrivedFrom: ['', Validators.required],
		Size: ['', Validators.required],
		Location: ['', Validators.required],
	});

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private dogRecordService: DogRecordService
	) { }

	onImageSelected(event: Event): void {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			let selectedFile = inputElement.files[0];

			ImageUtils.fileToByteArray(selectedFile)
				.then((byteArray: ArrayBuffer) => {
					this.addDogImage = selectedFile;
					this.addDogPreviewImage = ImageUtils.byteArrayToImage(byteArray);
				})
				.catch((error) => {
					window.alert("Cannot read uploaded image!");
					console.error('Error reading file:', error);
				});
		}
	}

	onAddDogRecord(): void {
		// Check if Dog has a name and form is achieved
		if (typeof this.addDogName !== 'string' || this.addDogName.trim() === '') {
			window.alert('No name supplied for dog');
			return;
		}

		// Send Info to Server
		let newDog: Dog = new Dog(
			this.addDogName.trim(),
			this.addDogFormGroup.get('Breed')?.value as string,
			this.addDogFormGroup.get('Age')?.value as unknown as number,
			this.addDogFormGroup.get('Sex')?.value as string,
			this.addDogFormGroup.get('Color')?.value as string,
			this.addDogFormGroup.get('ArrivedDate')?.value as unknown as Date,
			this.addDogFormGroup.get('ArrivedFrom')?.value as string,
			this.addDogFormGroup.get('Size')?.value as string,
			this.addDogFormGroup.get('Location')?.value as string
		);

		if (
			this.addDogDescription !== null &&
			this.addDogDescription !== undefined
		) {
			newDog.description = this.addDogDescription!.trim();

			if (newDog.description!.length > 350) {
				window.alert("Description Too Long!");
				return;
			}
		}

		if (this.addDogImage !== null && this.addDogImage !== undefined) {
			newDog.photoBytes = this.addDogImage;
		}

		this.dogRecordService.addDogRecord(newDog).subscribe({
			next: (value: boolean) => {
				if (value) {
					window.alert('Dog Record Added Successfully!');
					this.router.navigate(['/admin']);
				} else {
					window.alert('Failed to Add Dog Record!');
				}
			},
			error: (err: any) => {
				console.error(err);
				window.alert('Error Encountered!');
			},
		});
	}
}
