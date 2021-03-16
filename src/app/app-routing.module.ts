import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch : 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'tutor', loadChildren: () => import('./modules/tutor-schedule/tutor-schedule.module').then(m => m.TutorScheduleModule)},
  { path: 'lessons', loadChildren: () => import('./modules/lessons/lessons.module').then(m => m.LessonsModule)},
  { path: 'my-classes', loadChildren: () => import('./modules/my-classes/my-classes.module').then(m => m.MyClassesModule)},
  { path: 'analytics', loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule)},
  { path: '**', redirectTo: 'dashboard' }
];

