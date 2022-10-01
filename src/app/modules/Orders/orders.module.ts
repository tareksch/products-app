import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersResolver } from './services/order-resolver/orders.resolver';
import { UsersResolver } from './services/user-resolver/users.resolver';




@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    HttpClientModule
    
  ], providers: [OrdersResolver,UsersResolver]
})
export class OrdersModule { }
