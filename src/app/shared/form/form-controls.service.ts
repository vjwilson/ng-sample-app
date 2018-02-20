import { Injectable } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControlsBase } from './form-controls-types/form-controls-base';

@Injectable()
export class FormControlsService {

  constructor() { }

  buildForm(controls: FormControlsBase<any>[] ) {
    let group: any = {};

    controls.forEach(control => {
      if (control.required) {
        group[control.key] = new FormControl(control.value || '', Validators.required);
      } else {
        group[control.key] = new FormControl(control.value || '');
      }
    });
    return new FormGroup(group);
  }

}
