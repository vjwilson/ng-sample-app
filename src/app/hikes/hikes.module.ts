import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikesRoutingModule } from './hikes-routing.module';
import { HikesListComponent } from './hikes-list/hikes-list.component';

@NgModule({
  imports: [
    CommonModule,
    HikesRoutingModule
  ],
  declarations: [HikesListComponent]
})
export class HikesModule { }
