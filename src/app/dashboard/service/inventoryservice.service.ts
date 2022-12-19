import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Products} from '../interface/products'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryserviceService {
  
  constructor(private http: HttpClient) { }


  fetchData(): Observable<Products[]> {
    return this.http.get<Products[]>('https://639843c6044fa481d696f181.mockapi.io/Products')
    .pipe(map(data => Object.values(data)));
  
  }
  
}
