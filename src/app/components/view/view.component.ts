import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryserviceService } from 'src/app/dashboard/service/inventoryservice.service';
import { Products } from 'src/app/dashboard/interface/products';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  productID!: number;
  productInfo!: Products;
  constructor(
    private route: ActivatedRoute,
    private service: InventoryserviceService
  ) {}

  ngOnInit(): void {    
    this.productID = this.route.snapshot.params['id'];
    this.getProductInfo();
  }

  getProductInfo() {
    this.service.getProductInfo(this.productID).subscribe((res) => {
      this.productInfo = res;
    });
  }
}
