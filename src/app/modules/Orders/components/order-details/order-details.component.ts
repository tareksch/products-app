import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders, Products, Users } from '../../model/orders.model';
import { OrdersService } from '../../services/orders.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId?: number;
  ordersList: Orders[] = [];
  orderDetails?: Orders;
  totalQuantity?: number;
  users: Users[] = [];
  selectedUser?: Users;
  products:Products[]=[]

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = params["orderId"];
      this.ordersList = this.route.snapshot.data['orders'];
      this.users = this.route.snapshot.data['users'];
    })

    this.getOrderDetails();
    this.getUserById();
    this.calculateQuantitySum()
  }


  getOrderDetails() {
    this.ordersList.find(order => {
      if (order.OrderId == this.orderId) {
        this.orderDetails = order
      }
    })

  }

  calculateQuantitySum() {
    this.totalQuantity = this.orderDetails?.Products.reduce((a, b) => a + b.Quantity, 0)
  }

  getUserById() {
    this.users.find(user => {
      if (user.Id === this.orderDetails?.UserId) {
        this.selectedUser = user
      }
    })
  }

  back() {
    this.location.back()
  }

}
