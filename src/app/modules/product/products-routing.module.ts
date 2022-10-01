import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ProductsResolver } from './services/resolver/products.resolver';


const routes: Routes = [

    {
        path: '',
        component: ProductsComponent,
        resolve: {
            products: ProductsResolver
          },
    },
    

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule { }
