import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { products } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: products[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<products>> {
    if (this.products.length > 0) return of(this.products);
    return this.http.get<Array<products>>('assets/client-json/porducts.json').pipe(
      map(result => {
        this.products = result;
        return this.products
      })
    );
  }

editQuantities(product:products){
  this.products.push(product)
}
}
