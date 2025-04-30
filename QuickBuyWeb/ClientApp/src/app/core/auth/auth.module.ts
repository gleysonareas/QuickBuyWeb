import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { AuthRoutingModule, routedAuthComponents } from './auth-routing.module';

@NgModule({
    declarations: [
        ...routedAuthComponents,
    ],
    imports: [
        AuthRoutingModule,
        SharedModule,
    ],
})

export class AuthModule { }