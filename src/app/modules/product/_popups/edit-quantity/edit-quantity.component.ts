import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { products } from '../../model/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['./edit-quantity.component.scss']
})
export class EditQuantityComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;

  form!: FormGroup
  selectedProduct!: products

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }
  //Reactive form with form builder
  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: ['', [Validators.required]],
    })
  }
  //Display block when popup opened
  open() {
    this.modal.nativeElement.style.display = 'block';
  }
  //Display none when popup closed
  close() {
    this.modal.nativeElement.style.display = 'none';
  }
  //Get selected product from parent
  editProduct(Product: products) {
    this.selectedProduct = Product;
  }
//Send edit quantities the service 
  editQuantities() {
    this.selectedProduct.AvailablePieces = this.form.get('quantity')?.value
    this.productsService.editQuantities(this.selectedProduct)
    this.close();
  }

}
