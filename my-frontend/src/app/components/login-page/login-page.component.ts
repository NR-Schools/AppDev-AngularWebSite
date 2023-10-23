import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

	constructor(private formBuilder: FormBuilder,
				private accountService: AccountService) { }

	loginFormGroup = this.formBuilder.group({
		Email: ['', Validators.required],
		Password: ['', Validators.required],
	});

	loginAccount() {
		// Get Values From Controls
		const Email = this.loginFormGroup.get("Email")?.value as string;
		const Password = this.loginFormGroup.get("Password")?.value as string;

		// Login
		this.accountService.login(Email, Password).subscribe({
			next: (value: boolean) => {
				if (value) window.alert("Account Logged In Successfully!");
				else window.alert("Account Log In Failed!");
			},
			error: (err: any) => {
				window.alert("Error encountered!");
				console.log(err);
			}
		});
	}
}
