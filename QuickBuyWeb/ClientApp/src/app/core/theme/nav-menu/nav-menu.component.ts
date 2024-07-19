import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public userIsLogged(): boolean {
    // var authenticated = sessionStorage.getItem("user-is-logged");
    // if (authenticated == "1") {
    //   return true;
    // }
    // return false;
    return this.userService.userAuth()
  }

  exit() {
    // sessionStorage.setItem("user-is-logged", '');
    this.userService.clearSession();
    this.router.navigate(['/'])
  }

  get user() {
    return this.userService.user
  }
}
