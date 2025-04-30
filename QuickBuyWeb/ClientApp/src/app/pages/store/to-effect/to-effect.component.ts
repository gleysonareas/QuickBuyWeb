import { Component, inject, OnInit } from '@angular/core';
import { ShoppingCart } from "../shopping-cart/shopping-cart";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { IOrder } from "../../../shared/interfaces/order.interface";
import { UserService } from "../../../core/services/user.service";
import { IOrderItem } from "../../../shared/interfaces/order-item.interface";
import { OrderService } from "../../../core/services/order.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-to-effect',
  // standalone: true,
  // imports: [],
  templateUrl: './to-effect.component.html',
  styleUrl: './to-effect.component.css'
})
export class ToEffectComponent implements OnInit {
  private userService = inject(UserService)
  private orderService = inject(OrderService)
  private router = inject(Router)

  public products: IProduct[] = [];
  public shoppingCart = new ShoppingCart();

  ngOnInit(): void {
    this.products = this.shoppingCart.getItemsCart();
    if (this.products.length)
      this.setTotal()
  }

  setTotal() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price;
    }
    return total;
  }

  updatePrice(product: IProduct, quantity: number) {
    if (!product.initialPrice) product.initialPrice = product.price;
    product.price = product.initialPrice * quantity;
  }
  removeItem(product: IProduct) {
    this.shoppingCart.removeItemCart(product)
    this.products = this.shoppingCart.getItemsCart();
  }

  effectBuy() {
    this.orderService.effectBuy(this.createOrder()).subscribe(
      data => {
        sessionStorage.setItem('orderId', JSON.stringify(data))
        this.products = []
        this.shoppingCart.clear();
        this.router.navigate(['/'])
      },
      err => { })
  }

  createOrder() {
    let order = <IOrder>{}
    order.userId = this.userService.user.id;
    order.zipCode = '28635720'
    order.state = 'RJ'
    order.city = 'Nova Friburgo'
    order.address = 'ALberto Ceccon Ceccon'
    order.addressNumber = '123'
    order.dateRequest = new Date()
    order.deliveryForecastDate = new Date()
    order.paymentId = 1

    this.products = this.shoppingCart.getItemsCart();
    for (let product of this.products) {
      let itemRequest = <IOrderItem>{}
      itemRequest.productId = product.id;
      if (!product.quantity) {
        product.quantity = 1;
      }
      itemRequest.quantity = product.quantity;
      order.itensRequest.push(itemRequest);
    }
    return order;
  }
}
