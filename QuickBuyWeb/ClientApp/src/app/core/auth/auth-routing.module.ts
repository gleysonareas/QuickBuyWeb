import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = ([
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'new-user',
        component: NewUserComponent,
    }

]);

export const routedAuthComponents = [
    LoginComponent,
    NewUserComponent,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule { }