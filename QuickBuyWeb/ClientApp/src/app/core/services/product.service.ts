import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../../shared/model/product.interface";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private _baseUrl: string
  private products: IProduct[] = [];

  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient,
  ) {
    this._baseUrl = baseUrl
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this._baseUrl}/api/`)
  }
  public getById(productId: IProduct): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._baseUrl}/api/`)
  }

  public insert(product: IProduct): Observable<IProduct> {
    // var body = {
    //   name: product.name,
    //   description: product.description,
    //   price: product.price
    // }
    return this.http.post<IProduct>(`${this._baseUrl}/api/`, JSON.stringify(product), { headers: this.headers })
  }
  public update(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this._baseUrl}/api/`, JSON.stringify(product), { headers: this.headers })
  }
  public delete(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this._baseUrl}/api/`, JSON.stringify(product), { headers: this.headers })
  }
} 