import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorScheduleComponent } from './tutor-schedule.component';


const routes: Routes = [
  { path: '', component: TutorScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorScheduleRoutingModule { }
