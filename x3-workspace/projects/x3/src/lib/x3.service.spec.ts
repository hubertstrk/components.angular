import { TestBed } from '@angular/core/testing';

import { X3Service } from './x3.service';

describe('X3Service', () => {
  let service: X3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(X3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
