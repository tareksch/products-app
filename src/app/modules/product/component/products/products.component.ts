import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../model/products.model';
import { ProductsService } from '../../services/products.service';
import { AddNewOrderComponent } from '../../_popups/add-new-order/add-new-order.component';
import { EditQuantityComponent } from '../../_popups/edit-quantity/edit-quantity.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: products[] = [];
  selectedProducts: products[] = [];
  @ViewChild('newOrder', {static: false}) newOrder!: AddNewOrderComponent
  @ViewChild('editQuantity', {static: false}) editQuantity!: EditQuantityComponent

  

  constructor(private productsService: ProductsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products =this.route.snapshot.data['products'];
  }


  selectProducts(products: products) {
    this.selectedProducts.push(products)
  }

  openModal() {
    this.newOrder.open();
    this.newOrder.selecedProduct(this.selectedProducts)
  }
  

  openEditQuantity(products: products){
    this.editQuantity.open();
    this.editQuantity.editProduct(products)
  }

}
