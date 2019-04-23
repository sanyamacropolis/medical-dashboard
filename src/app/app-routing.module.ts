import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { PendingComponent } from './pending/pending.component';
import { SetScheduleComponent } from './set-schedule/set-schedule.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { FailedApplicantComponent } from './failed-applicant/failed-applicant.component';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '@angular/compiler';
import { PendingListComponent } from './pending-list/pending-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{		path: '',
		component: LoginComponent
	},
	{
		path:'login',
		component: LoginComponent
	},
	{
    	path: 'home',
		component: HomeComponent,
		children:[
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'applicant',
				component: ApplicantlistComponent
			},
			{
				path: 'scheduled',
				component: ScheduledComponent
			},
			{
				path: 'pending',
				component: PendingComponent,
				children: [
					{
					path: '',
					component: PendingListComponent
				},
				{
					path: 'setschedule',
					component: SetScheduleComponent
				}
				]
			},

			{
				path:'finalapplicants',
				component: FinalApplicantComponent
			},
			{
				path:'editprofile',
				component:UpdateStatusComponent
			},
			{
				path:'failedapplicants',
				component: FailedApplicantComponent
			}
		]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
