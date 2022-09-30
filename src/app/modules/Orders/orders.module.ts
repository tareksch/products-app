import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    HttpClientModule
    
  ]
})
export class OrdersModule { }
