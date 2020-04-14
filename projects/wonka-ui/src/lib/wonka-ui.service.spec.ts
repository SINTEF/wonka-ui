import { TestBed } from '@angular/core/testing';

import { WonkaUIService } from './wonka-ui.service';

describe('WonkaUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WonkaUIService = TestBed.get(WonkaUIService);
    expect(service).toBeTruthy();
  });
});
