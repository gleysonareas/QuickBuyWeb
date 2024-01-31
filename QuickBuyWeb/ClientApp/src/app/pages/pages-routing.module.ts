import { RoutesGuard } from './../core/guards/routes.guard';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterComponent } from './counter/counter.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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
        canActivate: [RoutesGuard]
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