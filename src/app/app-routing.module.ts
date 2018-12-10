import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowExcursionComponent } from './dashboard/show-excursion/show-excursion.component';
import { NewExcursionComponent } from './dashboard/new-excursion/new-excursion.component';
import { ExcursionsComponent } from './dashboard/excursions/excursions.component';
import { EditExcursionComponent } from './dashboard/edit-excursion/edit-excursion.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'city/:cityName', component: ExcursionsComponent }, 
      { path: 'new', component: NewExcursionComponent }, 
      { path: ':excursionId/show', component: ShowExcursionComponent }, 
      { path: ':excursionId/edit', component: EditExcursionComponent }, 
      { path: 'new', component: NewExcursionComponent }, 
    ]
  },
];

RouterModule.forRoot(routes, {useHash: false});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
