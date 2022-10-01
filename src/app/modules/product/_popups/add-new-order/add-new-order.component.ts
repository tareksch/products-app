import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Orders, Users } from 'src/app/modules/Orders/model/orders.model';
import { OrdersService } from 'src/app/modules/Orders/services/orders.service';
import { products } from '../../model/products.model';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.scss']
})
export class AddNewOrderComponent implements OnInit {

  @ViewChild('myModal', { static: false }) modal!: ElementRef;

  selectedProducts: products[] = [];
  users!: Users;
  order!: Orders
  totalPrice: number = 0;
  isCheckOut: boolean = false;
  form!: FormGroup

  constructor(private fb: FormBuilder, private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required, Validators.minLength(2)]],
      paymentMethod: ['', [Validators.required]],
    })
  }


  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
    this.isCheckOut = false;
  }

  selecedProduct(selectedProducts: products[]) {
    this.selectedProducts = []
    this.selectedProducts = selectedProducts;
    this.getTotalPrice()
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.selectedProducts.forEach(price => {
      this.totalPrice += price.ProductPrice
      this.totalPrice = this.totalPrice
    })
  }


  openCheckOut() {
    this.isCheckOut = !this.isCheckOut
  }

  Buy() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.users.Name = this.form.get('Name')?.value
    this.users.Email = this.form.get('Email')?.value
    this.users.Phone = this.form.get('Phone')?.value
    this.users.Address = this.form.get('Address')?.value
    this.order?.Products.filter(x=>{
     x.ProductId 
    }) 
    this.ordersService.addOrder(this.order, this.users)
  }
}
