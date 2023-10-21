import { Injectable } from '@angular/core';
import { BaseService } from './base_service';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Request } from '../models/request';
import { Observable, map } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends BaseService {

	constructor(private http: HttpClient) {
		super();
	}

	signUp(email: string, password: string): Observable<boolean> {
		// Get User Info
		let account = new Account();
		account.signup_login(email, password);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Send to Server
		return this.http.post<Response>(this.MainUrl + "account/signup", request)
			.pipe(map((response: Response) => {
				if (response.status == "success")
					return true;
				return false;
			}));
	}

	login(email: string, password: string): Observable<boolean> {
		// Get User Info
		let account = new Account();
		account.signup_login(email, password);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Validate from Server
		return this.http.post<Response>(this.MainUrl + "account/login", request)
			.pipe(map((response: Response) => {
				if (response.status == "success")
				{
					// Set Info on Local Storage
					localStorage.setItem("account_info", JSON.stringify(response.result));
					return true;
				}
				return false;
			}));
	}

	logout(): Observable<boolean> {
		// Get User Info
		let account: Account = JSON.parse(localStorage.getItem("account_info")!);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Send Info to Server
		return this.http.post<Response>(this.MainUrl + "account/login", request)
			.pipe(map((response: Response) => {
				if (response.status == "success")
				{
					// Clear Info on Local Storage
					localStorage.setItem("account_info", "");
					return true;
				}
				return false;
			}));
	}
}
