import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  signupFormGroup = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required],
  });

  signupAccount() {
    // Get Values From Controls
    const Email = this.signupFormGroup.get('Email')?.value as string;
    const Password = this.signupFormGroup.get('Password')?.value as string;
    const ConfirmPassword = this.signupFormGroup.get('ConfirmPassword')
      ?.value as string;

    // Check Password == ConfirmPassword
    if (Password !== ConfirmPassword) {
      window.alert('"Password" does not match "ConfirmPassword"');
      return;
    }

    // Signup
    this.accountService.signUp(Email, Password).subscribe({
      next: (value: boolean) => {
        if (value) {
          window.alert('Account Signed Up Successfully!');
          this.router.navigate(['/login']);
        } else window.alert('Account Sign Up Failed!');
      },
      error: (err: any) => {
        window.alert('Error encountered!');
        console.log(err);
      },
    });
  }
}
