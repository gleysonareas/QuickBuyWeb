import { PagesRoutingModule, routedPagesComponents } from './pages-routing.module';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from "./store/search/search.component";

@NgModule({
    declarations: [
        ...routedPagesComponents,
    ],
    imports: [
    PagesRoutingModule,
    SharedModule,
    SearchComponent
],
    exports: [
        ...routedPagesComponents,
    ]
})

export class PagesModule { }