import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './modules/product/component/products/products.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Products',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ProductsComponent,
    data: {
      title: 'Products'
    },
    children: [
      {
        path: 'Products',
        loadChildren: () =>
          import('./modules/product/products.module').then((m) => m.ProductsModule)
      },
    ]
  },
  { path: '**', redirectTo: 'Products' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
