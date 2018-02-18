import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HikesRoutingModule } from './hikes-routing.module';
import { HikesListComponent } from './hikes-list/hikes-list.component';

import { HikesService } from './hikes.service';
import { HikeFormComponent } from './hike-form/hike-form.component';
import { HikesComponent } from './hikes/hikes.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HikesRoutingModule,
  ],
  declarations: [
    HikesListComponent,
    HikeFormComponent,
    HikesComponent,
    HikeDetailComponent,
  ],
  providers: [HikesService],
})
export class HikesModule { }
