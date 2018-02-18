import { FormControlsBase } from './form-controls-base';

export class FormControlsRadio extends FormControlsBase<any> {
  controlType = 'radio';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
