import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewOrderComponent } from './_popups/add-new-order/add-new-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditQuantityComponent } from './_popups/edit-quantity/edit-quantity.component';



@NgModule({
  declarations: [ProductsComponent, AddNewOrderComponent, EditQuantityComponent],
  imports: [
    CommonModule, ProductsRoutingModule,HttpClientModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
