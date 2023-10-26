import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

	constructor(private router: Router,
		private formBuilder: FormBuilder,
		private accountService: AccountService) { }

	loginFormGroup = this.formBuilder.group({
		Email: ['', Validators.required],
		Password: ['', Validators.required],
	});

	loginAccount(): void {
		// Get Values From Controls
		const Email = this.loginFormGroup.get("Email")?.value as string;
		const Password = this.loginFormGroup.get("Password")?.value as string;

		// Login
		this.accountService.login(Email, Password).subscribe({
			next: (value: boolean) => {
				if (value) window.alert("Account Logged In Successfully!");
				else window.alert("Account Log In Failed!");

				// Do not proceed if failed to log in
				if (!value) return;

				// Redirect
				if (Email.trim().toLowerCase() === "admin") {
					this.router.navigate(['/admin']);
				}
				else {
					this.router.navigate(['/user']);
				}
			},
			error: (err: any) => {
				window.alert("Error encountered!");
				console.error(err);
			}
		});
	}
}
