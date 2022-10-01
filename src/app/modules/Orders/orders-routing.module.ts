import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsResolver } from '../product/services/resolver/products.resolver';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersResolver } from './services/order-resolver/orders.resolver';
import { UsersResolver } from './services/user-resolver/users.resolver';


const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                component: OrdersComponent,
                resolve: {
                    orders: OrdersResolver,products: ProductsResolver,
                  },
            },
            {
                path: 'order-details/:orderId',
                component: OrderDetailsComponent,
                resolve: {
                    orders: OrdersResolver,users:UsersResolver
                  },
            },
        ],
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule { }
