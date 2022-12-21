import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from 'src/app/dashboard/interface/products';
import { InventoryserviceService } from 'src/app/dashboard/service/inventoryservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements  OnInit, DoCheck {
  createProductForm!: FormGroup;
  @Input() currentProductInfo!: Products;
  editInfo!:Products

  constructor(private service: InventoryserviceService) {}

  

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      productID: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, Validators.required),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),
    });
  }

  ngDoCheck(): void {
    if (this.currentProductInfo === undefined) {
      
      console.log('no data found')
      
    } else {
      this.editInfo = this.currentProductInfo
      this.createProductForm.patchValue(this.editInfo);
  
    }
  }

  

  update(productID: number, updatedProductInfo: Products) {
    productID = this.currentProductInfo.id;
    updatedProductInfo = this.createProductForm.value;
    this.service.update(productID, updatedProductInfo);
  }
}
