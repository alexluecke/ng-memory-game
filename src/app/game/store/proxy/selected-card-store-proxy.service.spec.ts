import { TestBed, inject } from '@angular/core/testing';

import { SelectedCardStoreProxyService } from './selected-card-store-proxy.service';

describe('SelectedCardStoreProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedCardStoreProxyService]
    });
  });

  it('should be created', inject([SelectedCardStoreProxyService], (service: SelectedCardStoreProxyService) => {
    expect(service).toBeTruthy();
  }));
});
