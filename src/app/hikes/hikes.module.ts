import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HikesRoutingModule } from './hikes-routing.module';
import { HikesListComponent } from './hikes-list/hikes-list.component';

import { HikesService } from './hikes.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HikesRoutingModule,
  ],
  declarations: [
    HikesListComponent,
  ],
  providers: [HikesService],
})
export class HikesModule { }
