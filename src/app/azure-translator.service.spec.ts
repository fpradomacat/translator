import { TestBed } from '@angular/core/testing';

import { AzureTranslatorService } from './azure-translator.service';

describe('AzureTranslatorService', () => {
  let service: AzureTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
