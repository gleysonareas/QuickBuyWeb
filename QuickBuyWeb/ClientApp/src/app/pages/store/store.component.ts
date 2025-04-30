import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IProduct } from "../../shared/interfaces/product.interface";
import { ShoppingCart } from "./shopping-cart/shopping-cart";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {

  private router = inject(Router);

  public product: IProduct
  shoppingCart = new ShoppingCart()

  ngOnInit(): void {
    this.product = JSON.parse(sessionStorage.getItem('productDetail'))
  }

  buy() {
    this.shoppingCart.addItemCart(this.product);
    this.router.navigate(['/efetivar-compra']);
  }
}
