import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base_service';
import { Account } from '../models/account';

@Injectable({
	providedIn: 'root',
})
export class DogRecordService extends BaseService {
	constructor(private http: HttpClient) {
		super();
	}

	addDogRecord(dog: Dog): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Add dog to server
		return this.http.post<boolean>(this.MainUrl + 'dog/add-dog', dog, { headers: headers });
	}

	viewAllDogRecords(): Observable<Array<Dog>> {
		// Get all dogs
		return this.http.get<Array<Dog>>(this.MainUrl + 'dog/dogs');
	}

	viewDogRecord(dog_id: number): Observable<Dog> {
		// Get specific dog record
		return this.http.get<Dog>(this.MainUrl + `dog/show-dog/${dog_id}`);
	}

	updateDogRecord(dog_id: number, updated_dog_info: Dog): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Create updated dog object, merging id and updated info
		updated_dog_info.id = dog_id;

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Update dog on server
		return this.http.put<boolean>(this.MainUrl + 'dog/update-dog', updated_dog_info, { headers: headers });
	}

	deleteDogRecord(dog_id: number): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Delete dog from server
		return this.http.delete<boolean>(this.MainUrl + `dog/delete-dog/${dog_id}`, { headers: headers });
	}

	// For Adoption
	userDogAdopt(dog: Dog): Observable<Dog> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Adopt Dog from server
		return this.http.post<Dog>(this.MainUrl + `dog-adopt/user-dog-adopt`, dog, { headers: headers });
	}

	adminViewAllDogAdoptReq(): Observable<Array<Dog>> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		return this.http.get<Array<Dog>>(this.MainUrl + "dog-adopt/admin-view-all-adopt-req", { headers: headers });
	}

	adminConfirmDogAdopt(dog: Dog): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);
		
		return this.http.post<boolean>(this.MainUrl + "dog-adopt/admin-confirm-req", dog, { headers: headers });
	}
}
