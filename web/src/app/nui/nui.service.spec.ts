import { TestBed } from '@angular/core/testing';

import { NuiService } from './nui.service';

describe('NuiService', () => {
  let service: NuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
