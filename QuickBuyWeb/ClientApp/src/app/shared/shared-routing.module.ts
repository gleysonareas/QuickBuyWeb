import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = ([

]);

export const routedSharedModule = [];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ]
})

export class SharedRountingModule { }