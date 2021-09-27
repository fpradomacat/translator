import { TestBed } from '@angular/core/testing';

import { GoogleTranslatorService } from './google-translator.service';

describe('GoogleTranslatorService', () => {
  let service: GoogleTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
