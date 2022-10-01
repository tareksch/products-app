import { Component, OnInit, ViewChild } from '@angular/core';
import { products } from '../../model/products.model';
import { ProductsService } from '../../services/products.service';
import { AddNewOrderComponent } from '../../_popups/add-new-order/add-new-order.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: products[] = [];
  selectedProducts: products[] = [];
  @ViewChild('modal', {static: false}) modal!: AddNewOrderComponent

  

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsList()
  }

  getProductsList() {
    this.productsService.getProducts().subscribe(res => {
      this.products.push(...res)
    })
  }

  selectProducts(products: products) {
    this.selectedProducts.push(products)
  }

  openModal() {
    this.modal.open();
    this.modal.selecedProduct(this.selectedProducts)
  }
  
}
