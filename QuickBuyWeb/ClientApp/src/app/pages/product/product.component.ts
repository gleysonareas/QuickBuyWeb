import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/core/services/product.service";
import { IProduct } from "src/app/shared/model/product.interface";

@Component({
  selector: 'qb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public product: IProduct = <IProduct>{};
  public selectedFile: File

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

  public inputChange(data: FileList) {
    this.selectedFile = data.item(0)
    this.productService.sendFile(this.selectedFile).subscribe(
      result => {
        console.log(result)
      },
      err => {
        console.log(err)
      }
    )
  }
}
