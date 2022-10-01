import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isOrderLoading: boolean = false
  isProductLoading: boolean = false
  orderedProducts: Products[] = [];

  constructor(private ordersService: OrdersService,
    private productsService: ProductsService,
    private router: Router, private route: ActivatedRoute) { }

  //Fetch data from resolver
  ngOnInit(): void {
    this.ordersList = this.route.snapshot.data['orders'];
    this.products = this.route.snapshot.data['products'];
    this.calcPriceForEachOrder();
  }
  //Calculate the total price for each order
  calcPriceForEachOrder() {
    this.ordersList.forEach(o => {
      let totalPrice: number = 0;
      o.Products.forEach(p => {
        let productDetails = this.products.find(x => x.ProductId === p.ProductId);
        if (productDetails) {
          totalPrice += p.Quantity * productDetails.ProductPrice;
        }

      }

      );
      o.totalPrice = totalPrice;
    });
  }
  //Navigate to order details page with the orderId
  openOrderDetails(OrderId: number) {
    this.router.navigate(['orders/order-details/' + OrderId])
  }

}

