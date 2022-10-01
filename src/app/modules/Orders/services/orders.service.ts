import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders, Users } from '../model/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<Orders>> {
    return this.http.get<Array<Orders>>('assets/client-json/orders.json');
  }

  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>('assets/client-json/users.json');
  }
}
