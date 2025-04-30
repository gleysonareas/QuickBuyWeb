import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from '@angular/core';
import { IOrder } from "../../shared/interfaces/order.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _baseUrl: string
  // private orders: IOrder[] = [];

  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient,
  ) {
    this._baseUrl = baseUrl
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public effectBuy(order: IOrder) {
    return this.http.post(this._baseUrl + 'api/order', JSON.stringify(order), { headers: this.headers })
  }
}
