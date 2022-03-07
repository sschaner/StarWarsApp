import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { PeopleListComponent } from '../people/people-list/people-list.component';
import { PlanetsListComponent } from '../planets/planets-list/planets-list.component';

const routes: Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' },
];

@NgModule({
  declarations: [NavigationComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [NavigationComponent],
})
export class CoreModule {}
