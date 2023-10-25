import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public name: string = "";
  public releasedForSale: boolean = <boolean>{}; 

  constructor() { }

  ngOnInit(): void {
  }

  public getName(): string {
    return this.name;
  }
}
