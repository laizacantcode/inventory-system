import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class InventoryserviceService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  fetchData(): Observable<Products[]> {
    return this.http
      .get<Products[]>('https://639843c6044fa481d696f181.mockapi.io/Products')
      .pipe(map((data) => Object.values(data)));
  }

  delete(productID: number) {
    return this.http
      .delete<Products[]>(
        'https://639843c6044fa481d696f181.mockapi.io/Products/' + productID
      )
      .subscribe((response) =>
        this.snackbar.open('Deleted Successfully!', '', { duration: 2000 })
      );
  }

  create(newProduct: string) {
    return this.http
      .post('https://639843c6044fa481d696f181.mockapi.io/Products/', newProduct)
      .subscribe((response) => this.snackbar.open('Product Added Successfully!', '', { duration: 2000 }));
  }
}
