import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders, Users } from '../../model/orders.model';
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
  selectedUser?: Users

  constructor(private route: ActivatedRoute,private activatedRoute: ActivatedRoute, private ordersService: OrdersService, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = params["orderId"];
      this.ordersList = this.route.snapshot.data['orders'];
    })
    
    this.getOrderDetails();
    this.getUserById();
    this.calculateQuantity()
  }



  

  getOrderDetails() {
    this.ordersList.find(order=>{
      if(order.OrderId == this.orderId){
        this.orderDetails = order
      }
    })
     
  }

  getAllUsers() {
    this.ordersService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  calculateQuantity() {
    this.orderDetails?.Products.forEach(x => {
      x.Quantity = +x.Quantity
      this.totalQuantity =+ x.Quantity
      console.log(this.totalQuantity)
    })
  }

  getUserById() {
    this.selectedUser = this.users.find(user => {
      user.Id === this.orderDetails?.UserId
    })
  }

  back() {
    this.location.back()
  }

}
