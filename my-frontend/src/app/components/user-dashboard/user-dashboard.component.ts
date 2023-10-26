import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog';
import { DogRecordService } from '../../services/dog-record.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-dashboard',
	templateUrl: './user-dashboard.component.html',
	styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
	dogs: Dog[] = [];

	constructor(private router: Router,
		private accountService: AccountService,
		private dogRecordService: DogRecordService) { }

	ngOnInit(): void {
		this.dogRecordService.viewAllDogRecords().subscribe((data: Dog[]) => {
			this.dogs = data;
		});
	}

	onUserLogout() {
		this.accountService.logout().subscribe({
			next: (value: boolean) => {
				this.router.navigate(['/login']);
			},
			error: (err: any) => {
				console.log(err);
			}
		});
	}
}
