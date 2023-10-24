import { Injectable } from '@angular/core';
import { BaseService } from './base_service';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Request } from '../models/request';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AccountService extends BaseService {
	constructor(private http: HttpClient) {
		super();
	}

	signUp(email: string, password: string): Observable<boolean> {
		// Get User Info
		let account = new Account();
		account.signup_login(email, password);

		// Send to Server
		return this.http.post<boolean>(this.MainUrl + 'account/signup', account);
	}

	login(email: string, password: string): Observable<boolean> {
		// Get User Info
		let account = new Account();
		account.signup_login(email, password);

		// Validate from Server
		return this.http.post<Account>(this.MainUrl + 'account/login', account)
			.pipe(
				map((response: Account) => {
					if (response === null) {
						// Set Info on Local Storage
						localStorage.setItem(
							'account_info',
							JSON.stringify(response)
						);
						return true;
					}
					return false;
				})
			);
	}

	logout(): Observable<boolean> {
		// Get User Info
		let account: Account = JSON.parse(localStorage.getItem('account_info')!);

		// Prepare Request
		let request = new Request();
		request.setAccountPayload(account);

		// Send Info to Server
		return this.http.post<Account>(this.MainUrl + 'account/login', request)
			.pipe(
				map((response: Account) => {
					if (response === null) {
						// Clear Info on Local Storage
						localStorage.setItem('account_info', '');
						return true;
					}
					return false;
				})
			);
	}
}
