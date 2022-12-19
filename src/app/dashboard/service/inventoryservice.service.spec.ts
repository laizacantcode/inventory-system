import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { InventoryserviceService } from './inventoryservice.service';

describe('InventoryserviceService', () => {
  let service: InventoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, HttpClientModule],
    });
    service = TestBed.inject(InventoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
