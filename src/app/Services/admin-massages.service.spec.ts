import { TestBed } from '@angular/core/testing';

import { AdminMassagesService } from './admin-massages.service';

describe('AdminMassagesService', () => {
  let service: AdminMassagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMassagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
