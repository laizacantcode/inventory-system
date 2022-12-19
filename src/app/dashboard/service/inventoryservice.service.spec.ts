import { TestBed } from '@angular/core/testing';

import { InventoryserviceService } from './inventoryservice.service';

describe('InventoryserviceService', () => {
  let service: InventoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
