import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ViewDogDetailsComponent } from './components/view-dog-details/view-dog-details.component';
import { AddDogRecordComponent } from './components/add-dog-record/add-dog-record.component';
import { UpdateDogRecordComponent } from './components/update-dog-record/update-dog-record.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DogRequestsComponent } from './components/dog-requests/dog-requests.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/welcome',
		pathMatch: 'full'
	},
	{
		path: 'welcome',
		component: WelcomePageComponent
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
		component: ViewDogDetailsComponent
	},
	{
		path: 'add-dog-record',
		component: AddDogRecordComponent
	},
	{
		path: 'update-dog-record/:id',
		component: UpdateDogRecordComponent
	},
	{
		path: 'dog-requests',
		component: DogRequestsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
