import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base_service';
import { Account } from '../models/account';
import { Request } from '../models/request';
import { Response } from '../models/response';

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
		return this.http.get<Response>(this.MainUrl + 'dog/dogs').pipe(
			map((response: Response) => {
				if (response.status == 'success') return response.result as Array<Dog>;
				return Array();
			})
		);
	}

	viewDogRecord(dog_id: number): Observable<Dog> {
		// Get specific dog record
		return this.http
			.get<Response>(this.MainUrl + `dog/show-dog/${dog_id}`)
			.pipe(
				map((response: Response) => {
					if (response.status == 'success') return response.result as Dog;
					return Dog.NoDog();
				})
			);
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
		return this.http
			.put<Response>(this.MainUrl + 'dog/update-dog', updated_dog_info, { headers: headers })
			.pipe(
				map((response: Response) => {
					if (response.status == 'success') return true;
					return false;
				})
			);
	}

	deleteDogRecord(dog_id: number): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Delete dog from server
		return this.http
			.delete<Response>(this.MainUrl + `dog/delete-dog/${dog_id}`, { headers: headers })
			.pipe(
				map((response: Response) => {
					if (response.status == 'success') return true;
					return false;
				})
			);
	}
}
