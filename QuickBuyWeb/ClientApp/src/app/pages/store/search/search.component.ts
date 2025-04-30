import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from "../../../core/services/product.service";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  // standalone: true,
  // imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {

  private productService = inject(ProductService);
  private router = inject(Router);

  public products: IProduct[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (resp) => { this.products = resp },
      error: (err) => { console.log(err); }
    })
  }

  openProduct(product: IProduct) {
    sessionStorage.removeItem('productDetail');
    sessionStorage.setItem('productDetail', JSON.stringify(product));
    this.router.navigate(['/store']);
  }
}
