import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikesListComponent } from './hikes-list/hikes-list.component';

const routes: Routes = [
  {
    path: 'hikes',
    component: HikesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikesRoutingModule { }
