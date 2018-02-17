import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EditHikeComponent } from './edit-hike.component';

import { EditHikeRoutingModule } from './edit-hike-routing.module';

@NgModule({
  imports: [SharedModule, EditHikeRoutingModule],
  declarations: [EditHikeComponent]
})
export class EditHikeModule {}
