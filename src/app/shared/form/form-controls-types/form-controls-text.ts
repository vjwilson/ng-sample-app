import { FormControlsBase } from './form-controls-base';

export class FormControlsText extends FormControlsBase<string> {
  controlType = 'text';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
