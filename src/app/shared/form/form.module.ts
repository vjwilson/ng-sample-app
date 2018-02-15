import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { FormControlsService } from './form-controls.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormComponent,
    DynamicFormControlComponent,
  ],
  providers: [
    FormControlsService,
  ],
  exports: [
    DynamicFormControlComponent,
  ]
})
export class FormModule { }
