import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClassesRoutingModule } from './my-classes-routing.module';
import { MyClassesComponent } from './my-classes.component';


@NgModule({
  declarations: [MyClassesComponent],
  imports: [
    CommonModule,
    MyClassesRoutingModule
  ]
})
export class MyClassesModule { }
