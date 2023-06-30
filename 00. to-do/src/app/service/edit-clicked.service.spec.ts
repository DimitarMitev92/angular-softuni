import { TestBed } from '@angular/core/testing';

import { EditClickedService } from './edit-clicked.service';

describe('EditClickedService', () => {
  let service: EditClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
