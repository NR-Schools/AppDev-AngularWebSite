import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base_service';

@Injectable({
	providedIn: 'root',
})
export class DogRecordService extends BaseService {

	dogList: Array<Dog> = [
		new Dog('Buddy', 'Golden Retriever', 3, 'Male', 'Gold', 'Buddy is a friendly and playful dog. He loves to fetch and go on long walks.', new Date('2023-05-15'), 'Rescue Shelter', 'Medium', 'New York, NY'),
		new Dog('Luna', 'Labrador Retriever', 2, 'Female', 'Black, short coat with a white blaze on her forehead', 'Luna is a gentle and well-behaved dog. She enjoys cuddling and playing with toys.', new Date('2023-04-20'), 'Foster Home', 'Large', 'Los Angeles, CA'),
		new Dog('Rocky', 'German Shepherd', 4, 'Male', 'Sable, medium-length coat with a black mask', 'Rocky is a loyal and protective dog. He is great for families and enjoys outdoor activities.', new Date('2023-03-10'), 'Animal Rescue', 'Large', 'Chicago, IL'),
		new Dog('Daisy', 'Dachshund', 5, 'Female', 'Red, short coat with a dark stripe down her back', 'Daisy is a sweet and energetic dog. She loves to play fetch and go on adventures.', new Date('2023-06-05'), 'Animal Shelter', 'Small', 'Houston, TX'),
	];

	constructor(private http: HttpClient) {
		super();
	}

	addDogRecord(dog: Dog): void {
		// Send dog to server
	}

	viewAllDogRecords(): Array<Dog> {
		// Get all dogs
		// If user, return only dogs that are not yet adopted
		// If admin, return all dogs
		//return this.http.get<Dog[]>(this.dogssUrl + '/dogs/');
		return this.dogList;
	}

	viewDogRecord(dog_id: number): Dog {
		// Get specific dog record
		return this.dogList[0];
	}

	updateDogRecord(dog_id: number, updated_dog_info: Dog): void {
		// Create new dog object, merging id and updated info
		// Send dog to server
	}

	deleteDogRecord(dog_id: number): void {
		// Delete dog from server
	}
}
