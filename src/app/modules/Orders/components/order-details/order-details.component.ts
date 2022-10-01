import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders, Users } from '../../model/orders.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId?: number;
  ordersList: Orders[] = [];
  orderDetails?: Orders;
  totalQuantity: any;
  users: Users[] = [];
  selectedUser?: Users

  constructor(private activatedRoute: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = params["orderId"];
      this.getAllOrders()

    })
    this.getOrderDetails();
    this.getUserById();
  }

  getAllOrders() {
    this.ordersService.getOrders().subscribe(res => {
      this.ordersList = res;
    })

  }

  getOrderDetails() {
    this.orderDetails = this.ordersList.find(order => {
      order.OrderId === this.orderId;
    })
  }

  getAllUsers() {
    this.ordersService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  calculateQuantity() {
    this.orderDetails?.Products.forEach(x => {
      this.totalQuantity = +x.Quantity
    })
  }

  getUserById() {
    this.selectedUser = this.users.find(user => {
      user.Id === this.orderDetails?.UserId
    })
  }

}
