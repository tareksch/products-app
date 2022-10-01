import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { products } from '../../model/products.model';

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['./edit-quantity.component.scss']
})
export class EditQuantityComponent implements OnInit {
  @ViewChild('myModal', { static: false }) modal!: ElementRef;
  
  form!: FormGroup
  selectedProduct!: products
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: ['', [Validators.required]],
    })
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
  editProduct(Product: products) {
    this.selectedProduct = Product;
  }

}
