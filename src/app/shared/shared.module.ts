import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { AppendMilesPipe } from './append-miles.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarComponent, AppendMilesPipe],
  exports: [
    StarComponent,
    AppendMilesPipe,
  ],
})
export class SharedModule { }
