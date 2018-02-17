import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditHikeComponent } from './edit-hike.component';

const routes: Routes = [{ path: 'edit', component: EditHikeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditHikeRoutingModule {}
