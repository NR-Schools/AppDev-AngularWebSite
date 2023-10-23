import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { AddDogRecordComponent } from './add-dog-record/add-dog-record.component';
import { UpdateDogRecordComponent } from './update-dog-record/update-dog-record.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'signup',
		component: SignupPageComponent
	},
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'user',
		component: UserDashboardComponent
	},
	{
		path: 'admin',
		component: AdminDashboardComponent
	},
	{
		path: 'dog/:id',
		component: DogDetailsComponent
	},
	{
		path: 'add-dog-record',
		component: AddDogRecordComponent
	},
	{
		path: 'update-dog-record',
		component: UpdateDogRecordComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
