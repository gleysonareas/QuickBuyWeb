import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule

    ],
    exports: [
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
})

export class SharedModule { }