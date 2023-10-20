import { Injectable } from '@angular/core';
import { BaseService } from './base_service';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends BaseService {

	constructor(private http: HttpClient) {
		super();
	}

	signUp(email: string, password: string): void {
		// Get User Info
		// Send to Server
		// Redirect to Login Page
	}

	login(email: string, password: string): void {
		// Get User Info
		// Validate from Server
		// Redirect User if Success
	}

	logout(): void {
		// Logout
		// Send Info to Server
		// Redireect
	}
}
