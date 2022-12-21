import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroupDirective } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InventoryserviceService {
  

  constructor(private http: HttpClient, private snackbar: MatSnackBar,) {}

  fetchData(): Observable<Products[]> {
    return this.http
      .get<Products[]>('https://63a19bb5a543280f775bc426.mockapi.io/Products')
      .pipe(map((data) => Object.values(data)));
  }

  delete(productID: number) {
    return this.http
      .delete<Products[]>(
        'https://63a19bb5a543280f775bc426.mockapi.io/Products/' + productID
      )
      .subscribe((response) =>
        this.snackbar.open('Deleted Successfully!', '', { duration: 2000 })
      );
  }

  create(newProduct: Products) {
    return this.http
      .post<Products>('https://63a19bb5a543280f775bc426.mockapi.io/Products', newProduct )
      .subscribe((response) =>
        this.snackbar.open('Product Added Successfully!', '', {
        duration: 2000,
        })
      );
      
  }

  getProductInfo(productID: number) {
    return this.http.get<any>(
      `https://63a19bb5a543280f775bc426.mockapi.io/Products/${productID}`
    );
  }

  update(productID: number, updatedProductInfo: Products) {
    return this.http.put('https://63a19bb5a543280f775bc426.mockapi.io/Products/' + productID,  updatedProductInfo)
    .subscribe((response) => this.snackbar.open('Product Added Successfully!', '', {
      duration: 2000,
    })
    );
  }
}
