import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { ShoppingCart } from "src/app/pages/store/shopping-cart/shopping-cart";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  shoppingCart: ShoppingCart

  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

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

  public userIsAdmin(): boolean {
    return this.userService.userAdmin();
  }

  exit() {
    // sessionStorage.setItem("user-is-logged", '');
    this.userService.clearSession();
    this.router.navigate(['/'])
  }

  get user() {
    return this.userService.user
  }

  public verifyShoppingCart() {
    // return this.shoppingCart.verifyShoppingCart()
  }
}
