import { TestBed } from '@angular/core/testing';

import { AcortadorService } from './acortador.service';

describe('AcortadorService', () => {
  let service: AcortadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcortadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
