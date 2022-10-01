import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrdersService } from '../orders.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<boolean> {
  constructor(private ordersService:OrdersService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.ordersService.getUsers();
  }
}
