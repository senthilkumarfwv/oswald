import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NotifyComponent } from './notify/notify.component';



@NgModule({
  declarations: [HeaderComponent, UserComponent, NotifyComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    UserComponent,
    NotifyComponent
  ]
})
export class RegularsModule { }
