import { TestBed, inject } from '@angular/core/testing';

import { HikesService } from './hikes.service';

describe('HikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HikesService]
    });
  });

  it('should be created', inject([HikesService], (service: HikesService) => {
    expect(service).toBeTruthy();
  }));
});
