import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
//import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class RoutesGuard  {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean /*| Observable<boolean> | Promise<boolean>*/ {
        // this.userService
        // var authenticated = sessionStorage.getItem("user-is-logged");
        // if (authenticated == "1") {
        if (this.userService.userAuth()) {
            return true;
        }
        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } })
        return false;
    }
}