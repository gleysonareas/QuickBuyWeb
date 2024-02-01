import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/core/services/product.service";
import { IProduct } from "src/app/shared/model/product.interface";

@Component({
  selector: 'qb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public product: IProduct;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  public addProduct() {
    this.productService.insert(this.product).subscribe(
      data => { },
      err => { }
    );
  }
}
