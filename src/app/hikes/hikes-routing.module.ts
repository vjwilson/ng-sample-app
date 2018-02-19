import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HikesComponent } from './hikes/hikes.component';
import { HikesListComponent } from './hikes-list/hikes-list.component';
import { HikeFormComponent } from './hike-form/hike-form.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';
import { AuthGuard } from './../shared/auth.guard';

const routes: Routes = [
  {
    path: 'hikes',
    component: HikesComponent,
    children: [
      {
        path: '',
        component: HikesListComponent,
      },
      {
        path: 'new',
        component: HikeFormComponent,
        canActivate: [
          AuthGuard
        ],
      },
      {
        path: ':id',
        component: HikeDetailComponent,
      },
      {
        path: ':id/edit',
        component: HikeFormComponent,
        canActivate: [
          AuthGuard
        ],
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikesRoutingModule { }
