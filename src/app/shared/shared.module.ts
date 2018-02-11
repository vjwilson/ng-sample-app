import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { AppendMilesPipe } from './append-miles.pipe';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    AppendMilesPipe,
  ],
  providers: [AuthGuard],
  exports: [
    StarComponent,
    AppendMilesPipe,
  ],
})
export class SharedModule { }
