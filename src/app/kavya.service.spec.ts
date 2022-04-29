import { TestBed } from '@angular/core/testing';

import { KavyaService } from '../kavya.service';

describe('KavyaService', () => {
  let service: KavyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KavyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


