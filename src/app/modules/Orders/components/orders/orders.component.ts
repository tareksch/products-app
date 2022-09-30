import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/modules/product/model/products.model';
import { ProductsService } from 'src/app/modules/product/services/products.service';
import { Orders, Products } from '../../model/orders.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersList: Orders[] = [];
  products: products[] = [];
  productsList: Products[] = [];
  isOrderLoading: boolean = false
  isProductLoading: boolean = false

  constructor(private ordersService: OrdersService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getOrdersList()
    this.getProductsList();
  }

  getOrdersList() {
    this.ordersService.getOrders().subscribe(res => {
      this.ordersList = res;
      this.getProductsList()
    })
  }

  getProductsList() {
    this.productsService.getProducts().subscribe( res => {
      this.products = res;
    })
    this.getPriceForEactOrder();
  }

  getPriceForEactOrder() {
    this.products.forEach(product => {
      this.ordersList.forEach(e => e.Products.forEach(p => {
        if(p.ProductId === product.ProductId) {
          p.price = product.ProductPrice;       
        }       
      }
    ))})
    let totalPrice: number;
    this.ordersList.forEach(o => o.Products.forEach(p => {
      totalPrice += p.Quantity * p.price
      o.totalPrice = totalPrice;
    }
   
    ))
}
 
}

