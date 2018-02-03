import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikesListComponent } from './hikes-list/hikes-list.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';

const routes: Routes = [
  {
    path: 'hikes',
    component: HikesListComponent
  },
  {
    path: 'hikes/:id',
    component: HikeDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikesRoutingModule { }
