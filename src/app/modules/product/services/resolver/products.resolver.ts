import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<boolean> {
  constructor(private productsService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   return this.productsService.getProducts()
  }
}
