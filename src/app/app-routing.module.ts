import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './modules/product/component/products/products.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/product/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/Orders/orders.module').then((m) => m.OrdersModule)
  }
  ,
  { path: '**', redirectTo: 'products' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
