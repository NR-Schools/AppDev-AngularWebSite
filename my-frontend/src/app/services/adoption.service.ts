import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { DogAdopt } from '../models/dog-adopt';
import { BaseService } from './base_service';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Request } from '../models/request';
import { Observable, map } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
	providedIn: 'root'
})
export class AdoptionService extends BaseService {

	constructor(private http: HttpClient) {
		super();
	}

	userAdoptDog(dog: Dog): Observable<DogAdopt> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem("account_info")!);

		// Prepare Dog Adopt
		let dogAdopt: DogAdopt = new DogAdopt(dog, account, new Date());

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);
		request.setDogAdoptPayload(dogAdopt);

		// Send to Server
		return this.http.post<Response>(this.MainUrl + "dog-adopt/user-dog-adapt", request)
				.pipe(map((response: Response) => {
					if (response.status == "success")
						return response.result as DogAdopt;
					return DogAdopt.NoDogAdopt();
				}));
	}

	viewUserAdoptionHistory(): Observable<Array<DogAdopt>> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem("account_info")!);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Only return adoption history of a specific user
		return this.http.post<Response>(this.MainUrl + "dog-adopt/user-view-all-dog-adopt", request)
				.pipe(map((response: Response) => {
					if (response.status == "success")
						return response.result as Array<DogAdopt>;
					return Array();
				}));
	}

	adminConfirmAdoptDog(dog_adopt: DogAdopt): Observable<boolean> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem("account_info")!);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);
		request.setDogAdoptPayload(dog_adopt);
   
		// Send to Server
		return this.http.post<Response>(this.MainUrl + "dog-adopt/admin-confirm-dog-adopt", request)
				.pipe(map((response: Response) => {
					if (response.status == "success")
						return true;
					return false;
				}));
	}

	adminViewAllAdoptRequests(): Observable<Array<DogAdopt>> {
		// Get Auth Data
		let account: Account = JSON.parse(localStorage.getItem("account_info")!);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Only return all requesting dog-adopt confirmation
		return this.http.post<Response>(this.MainUrl + "dog-adopt/admin-confirm-dog-adopt", request)
				.pipe(map((response: Response) => {
					if (response.status == "success")
						return response.result as Array<DogAdopt>;
					return Array();
				}));
	}
}
