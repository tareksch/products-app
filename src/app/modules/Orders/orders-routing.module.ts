import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                component: OrdersComponent,
            },
            {
                path: 'order-details/:orderId',
                component: OrderDetailsComponent,
            },
        ],
    },

    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule { }
