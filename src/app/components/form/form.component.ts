import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Products } from 'src/app/dashboard/interface/products';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  createProductForm!: FormGroup;
  formval!: Products;
  @Input() updateData!: Products;
  
  
  constructor() {}

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      productID: new FormControl(null, [Validators.required]),
      productName: new FormControl(null, Validators.required),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),

    });
    console.log(this.updateData)
  }

  productUpdate(data: Object) {
    this.createProductForm.patchValue(this.updateData);
  }

  submitted() {
    this.formval = this.createProductForm.value;
  }

  
}
