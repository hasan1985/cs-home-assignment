import { TestBed } from '@angular/core/testing';

import { CshaUiCompLibService } from './csha-ui-comp-lib.service';

describe('CshaUiCompLibService', () => {
  let service: CshaUiCompLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CshaUiCompLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
