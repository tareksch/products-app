import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../model/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrders(): Observable<Array<Orders>> {
    return this.http.get<Array<Orders>>('assets/client-json/orders.json');
}
}
