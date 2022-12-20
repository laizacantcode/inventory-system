import { Component, OnInit, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import { InventoryserviceService } from '../../dashboard/service/inventoryservice.service';
import { Products } from '../../dashboard/interface/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss'],
})
export class DisplayproductsComponent implements OnInit, OnDestroy {
  
  productList!: Observable<Products[]>;
  openTemplate = false;
  updateData!: Products;


  constructor(
    private service: InventoryserviceService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.productList = this.service.fetchData();
  }

  delete(productID: number) {
    this.service.delete(productID);
  }

  update(productID: number) {
    this.openTemplate = true;
    this.service.getProductInfo(productID).subscribe((res) => {this.updateData=res})
  } 
  
   
  ngOnDestroy(): void {
    
  }
 }
