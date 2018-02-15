import { TestBed, inject } from '@angular/core/testing';

import { FormControlsService } from './form-controls.service';

describe('FormControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormControlsService]
    });
  });

  it('should be created', inject([FormControlsService], (service: FormControlsService) => {
    expect(service).toBeTruthy();
  }));
});
