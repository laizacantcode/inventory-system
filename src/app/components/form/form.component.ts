import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, DoCheck {
  createProductForm!: FormGroup;
  @Input() currentProductInfo! : any;

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
 
  ngDoCheck(): void {
    this.createProductForm.patchValue(this.currentProductInfo)
  }

  submitted() {
    
  }
}
