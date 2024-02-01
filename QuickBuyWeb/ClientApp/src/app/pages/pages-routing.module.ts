import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

import { RoutesGuard } from './../core/guards/routes.guard';

const routes: Routes = ([
    {
        path: '',
        component: HomeComponent,
    },
    // {
    //     path: 'counter',
    //     component: CounterComponent,
    // },
    // {
    //     path: 'fetch-data',
    //     component: FetchDataComponent,
    // },
    {
        path: 'product',
        component: ProductComponent,
        // canActivate: [RoutesGuard]
    }
]);

export const routedPagesComponents = [
    HomeComponent,
    // CounterComponent,
    // FetchDataComponent,
    ProductComponent,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PagesRoutingModule { }