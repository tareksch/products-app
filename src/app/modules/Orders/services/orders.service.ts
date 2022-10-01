import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Orders, Users } from '../model/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Array<Orders> = [];
  users: Array<Users> = [];

  constructor(private http: HttpClient) { }

  //Get orders data from orders.json and added the new order  
  getOrders(): Observable<Array<Orders>> {
    if (this.orders.length > 0) return of(this.orders);
    return this.http.get<Array<Orders>>('assets/client-json/orders.json').pipe(
      map(result => {
        this.orders = result;
        return this.orders
      })
    );
  }
  //Get user data from user.json and added the new user 
  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>('assets/client-json/users.json').pipe(
      map(result => {
        this.users = result;
        return this.users
      })
    );
  }

  //Add new order and user from the component
  addOrder(order: Orders,user:Users) {
    this.orders.push(order);
    this.users.push(user);
  }
}
