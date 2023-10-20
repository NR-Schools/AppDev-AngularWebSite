import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { DogAdopt } from '../models/dog-adopt';
import { BaseService } from './base_service';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AdoptionService extends BaseService {

	constructor(private http: HttpClient) {
		super();
	}

	userAdoptDog(dog: Dog) {
		// Create DogAdopt object
		// Send to Server
	}

	viewUserAdoptionHistory() {
		// Only return adoption history of a specific user
	}

	adminConfirmAdoptDog(dog_adopt: DogAdopt) {
		// Check if admin
		// Update DogAdopt
		// Send to Server
	}

	adminViewAllAdoptRequests() {
		// Return all adopt requests
	}
}
