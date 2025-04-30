import { IProduct } from "../../../shared/interfaces/product.interface";

export class ShoppingCart {

  products: IProduct[] = [];

  addItemCart(product: IProduct) {
    const productsCart = JSON.parse(localStorage.getItem('productsCart')) || [];
    if (!productsCart)
      this.products.push(product);
    else {
      this.products = productsCart;
      this.products.push(product);
    }
    localStorage.setItem('productsCart', JSON.stringify(this.products));
  }

  getItemsCart(): IProduct[] {
    const productsCart = JSON.parse(localStorage.getItem('productsCart')) || [];
    if (productsCart)
      return productsCart;
    return this.products
  }

  removeItemCart(product: IProduct) {
    this.products = JSON.parse(localStorage.getItem('productsCart')) || [];
    this.products = this.products.filter((item) => item.id !== product.id);
    localStorage.setItem('productsCart', JSON.stringify(this.products));
  }

  verifyShoppingCart() {
    const items = this.getItemsCart();
    return items && items.length > 0;
  }
}
