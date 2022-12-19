import { Component, OnInit, Input } from '@angular/core';
import { InventoryserviceService } from '../../dashboard/service/inventoryservice.service';
import { Products } from '../../dashboard/interface/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss'],
})
export class DisplayproductsComponent implements OnInit {
  userlist!: Observable<Products[]>;

  constructor(
    private service: InventoryserviceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userlist = this.service.fetchData();
  }

  delete(productID: number) {
    this.service.delete(productID);
  }
}
