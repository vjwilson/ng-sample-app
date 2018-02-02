import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HikesRoutingModule } from './hikes-routing.module';
import { HikesListComponent } from './hikes-list/hikes-list.component';

import { HikesService } from './hikes.service';
import { HikesFormComponent } from './hikes-form/hikes-form.component';
import { HikesComponent } from './hikes/hikes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HikesRoutingModule,
  ],
  declarations: [
    HikesListComponent,
    HikesFormComponent,
    HikesComponent,
  ],
  providers: [HikesService],
})
export class HikesModule { }
