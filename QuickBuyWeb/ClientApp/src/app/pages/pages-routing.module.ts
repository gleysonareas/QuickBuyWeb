import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { RoutesGuard } from './../core/guards/routes.guard';
import { SearchProductsComponent } from "./search-products/search-products.component";
import { StoreComponent } from "./store/store.component";
import { ToEffectComponent } from "./store/to-effect/to-effect.component";

const routes: Routes = ([
    // {
    //     path: 'counter',
    //     component: CounterComponent,
    // },
    // {
    //     path: 'fetch-data',
    //     component: FetchDataComponent,
    // },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'product',
        component: ProductComponent,
        canActivate: [RoutesGuard]
    },
    {
        path: 'search-product',
        component: SearchProductsComponent,
        canActivate: [RoutesGuard]
    },
    {
        path: 'store',
        component: StoreComponent,
        // canActivate: [RoutesGuard]
    },
    {
        path: 'efetivar-compra',
        component: ToEffectComponent,
        canActivate: [RoutesGuard]
    }
]);

export const routedPagesComponents = [
    // CounterComponent,
    // FetchDataComponent,
    HomeComponent,
    ProductComponent,
    SearchProductsComponent,
    StoreComponent,
    ToEffectComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PagesRoutingModule { }