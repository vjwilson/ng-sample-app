import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikesListComponent } from './hikes-list/hikes-list.component';
import { HikesFormComponent } from './hikes-form/hikes-form.component';

const routes: Routes = [
  {
    path: 'hikes',
    component: HikesListComponent,
  },
  {
    path: 'add-hike',
    component: HikesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikesRoutingModule { }
