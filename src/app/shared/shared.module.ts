import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormModule } from './form/form.module';
import { AppendMilesPipe } from './append-miles.pipe';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormModule
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
