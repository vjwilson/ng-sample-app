import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlsBase } from './../form-controls-types/form-controls-base';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent implements OnInit {
  @Input() control: FormControlsBase<any>;
  @Input() form: FormGroup;
  @Input() showErrors: Boolean;

  constructor() { }

  ngOnInit() {
  }
}
