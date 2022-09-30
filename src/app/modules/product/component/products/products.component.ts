import { Component, OnInit } from '@angular/core';
import { products } from '../../model/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: products[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsList()
  }

  getProductsList() {
    this.productsService.getProducts().subscribe(res => {
      this.products.push(...res)
    })
    console.log(this.products)
  }
}
