import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorScheduleRoutingModule } from './tutor-schedule-routing.module';
import { TutorScheduleComponent } from './tutor-schedule.component';


@NgModule({
  declarations: [TutorScheduleComponent],
  imports: [
    CommonModule,
    TutorScheduleRoutingModule
  ]
})
export class TutorScheduleModule { }
