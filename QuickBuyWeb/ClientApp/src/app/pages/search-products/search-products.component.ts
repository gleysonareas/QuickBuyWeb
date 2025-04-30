import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from "../../core/services/product.service";
import { Router } from "@angular/router";
// import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-search-products',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})
export class SearchProductsComponent implements OnInit {

  private productService = inject(ProductService)
  private router = inject(Router)

  public products: any[]

  ngOnInit(): void {
    this.getProducts();
  }


  addProduct() {
    this.router.navigate(["/product"])
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: (resp) => {
        console.log(resp)
        this.products = resp
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editProduct(item: any) {
    sessionStorage.setItem("productSelected", JSON.stringify(item))
    this.router.navigate(["/product"])
  }
  deleteProduct(item: any) {
    const isDelete = confirm("Deseja realmente excluir este item?")
    if (isDelete) this.productService.delete(item).subscribe({
      next: (resp) => {
        if (resp) {
          this.getProducts()
        }
      },
      error: (err) => { console.log(err) }
    })
  }
}
