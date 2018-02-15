import { FormControlsBase } from './form-controls-base';

export class FormControlsRadio extends FormControlsBase<string> {
  controlType = 'radio';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
