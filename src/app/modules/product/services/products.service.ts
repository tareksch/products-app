import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Array<products>> {
    return this.http.get<Array<products>>('assets/client-json/porducts.json');
}
}
