import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from './core/theme/nav-menu/nav-menu.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/auth.module')
            .then(m => m.AuthModule),
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path: 'shared',
        loadChildren: () => import('./shared/shared.module')
            .then(m => m.SharedModule),
    },

    { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
    useHash: false
};

export const routedComponents = [
    AppComponent,
    NavMenuComponent,
];

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})

export class AppRoutingModule { }