import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { DogAdopt } from '../models/dog-adopt';
import { BaseService } from './base_service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../models/account';
import { Request } from '../models/request';
import { Observable, map } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
	providedIn: 'root',
})
export class AdoptionService extends BaseService {
	constructor(private http: HttpClient) {
		super();
	}

	userAdoptDog(dog: Dog): Observable<DogAdopt> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare Dog Adopt
		let dogAdopt: DogAdopt = new DogAdopt(dog, account, new Date());

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);


		// Send to Server
		return this.http.post<DogAdopt>(this.MainUrl + 'dog-adopt/user-dog-adapt', dogAdopt, { headers: headers });
	}

	viewUserAdoptionHistory(): Observable<Array<DogAdopt>> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Only return adoption history of a specific user
		return this.http.post<Array<DogAdopt>>(this.MainUrl + 'dog-adopt/user-view-all-dog-adopt', {}, { headers: headers });
	}

	adminConfirmAdoptDog(dog_adopt: DogAdopt): Observable<DogAdopt> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Send to Server
		return this.http.post<DogAdopt>(this.MainUrl + 'dog-adopt/admin-confirm-dog-adopt', dog_adopt, { headers: headers });
	}

	adminViewAllAdoptRequests(): Observable<Array<DogAdopt>> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare headers
		const headers = new HttpHeaders()
			.set('email', account.email!)
			.set('session-auth-string', account.sessionAuthString!);

		// Only return all requesting dog-adopt confirmation
		return this.http.post<Array<DogAdopt>>(this.MainUrl + 'dog-adopt/admin-confirm-dog-adopt', {}, { headers: headers });
	}
}
