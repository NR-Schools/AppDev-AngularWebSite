import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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
		path: 'dogs',
		component: UserDashboardComponent
	},
	{
		path: 'admin',
		component: AdminDashboardComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
