import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryserviceService } from '../../dashboard/service/inventoryservice.service';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/dashboard/interface/products';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss'],
})
export class CreateproductComponent implements OnInit {
  createProductForm!: FormGroup;
  newProduct!: Products[];
  
  constructor(
    private service: InventoryserviceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
      this.createProductForm = new FormGroup({
      productID: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, Validators.required),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),
    });
  }

  create(newProduct: string) {
    this.newProduct = this.createProductForm.value;
    this.http.post('https://63a19bb5a543280f775bc426.mockapi.io/Products', this.newProduct).subscribe((res) => console.log(res))
  }
}
