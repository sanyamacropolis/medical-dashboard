import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { PendingComponent } from './pending/pending.component';
import { SetScheduleComponent } from './set-schedule/set-schedule.component';
import { FinalApplicantComponent } from './final-applicant/final-applicant.component';
import { FailedApplicantComponent } from './failed-applicant/failed-applicant.component';


const routes: Routes = [
{
    path: 'home',
    component: HomeComponent
},

{
	path: 'editprofile',
	component: EditprofileComponent
},
{
	path: 'applicantlist',
	component: ApplicantlistComponent
},

{
	path: 'scheduled',
	component: ScheduledComponent
},
{
	path: 'pending',
	component: PendingComponent
},
{
	path: 'final',
	component: FinalApplicantComponent
},
{
	path: 'failed',
	component: FailedApplicantComponent
},
{
	path: 'update',
	component: UpdateStatusComponent
},
{
	path: 'setschedule',
	component: SetScheduleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
