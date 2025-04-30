import { PagesRoutingModule, routedPagesComponents } from './pages-routing.module';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from "./store/search/search.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SearchComponent,
        ...routedPagesComponents,
    ],
    imports: [
        PagesRoutingModule,
        SharedModule,
        CommonModule,
    ],
    exports: [
        ...routedPagesComponents,
    ]
})

export class PagesModule { }