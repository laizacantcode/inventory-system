import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from 'src/app/dashboard/interface/products';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  createProductForm!: FormGroup;
  formval!: Products;

  constructor() {}

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      productID: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, Validators.required),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),
    });
  }

  submitted() {
    this.formval = this.createProductForm.value;
  }
}
