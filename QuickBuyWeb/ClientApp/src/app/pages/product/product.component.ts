import { Component, inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "../../core/services/product.service";
import { IProduct } from "../../shared/interfaces/product.interface";

@Component({
  selector: 'qb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  private productService = inject(ProductService);
  private router = inject(Router)

  public product: IProduct = <IProduct>{};
  public activateSpinner: boolean = false;
  public selectedFile: File;
  public message: string;

  public ngOnInit(): void {
    const productSelected = JSON.parse(sessionStorage.getItem("productSelected"));
    if (productSelected)
      this.product = productSelected
  }

  public addProduct() {
    this.activateSpinner = true
    this.productService.insert(this.product).subscribe(
      data => {
        this.activateSpinner = false;
        console.log(data)
        sessionStorage.removeItem("productSelected")
        this.router.navigate(["/search-product"])
      },
      err => {
        this.activateSpinner = false;
        console.log(err.error)
        this.message = err.error
      }
    );
  }

  public inputChange(data: FileList) {
    this.selectedFile = data.item(0)
    this.activateSpinner = true
    this.productService.sendFile(this.selectedFile).subscribe(
      result => {
        this.product.nameFile = result
        console.log(result)
        this.activateSpinner = false;
      },
      err => {
        console.log(err)
        this.activateSpinner = false
      }
    )
  }

  cancel() {
    this.router.navigate(["/search-product"])
    sessionStorage.removeItem("productSelected")
  }
}
