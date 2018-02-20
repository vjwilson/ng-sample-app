import { FormControlsBase } from './form-controls-base';

export class FormControlsTextarea extends FormControlsBase<any> {
  controlType = 'textarea';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
