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
    return this.http.get<IProduct[]>(`${this._baseUrl}api/product`)
  }

  public getById(productId: IProduct): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._baseUrl}api/product`)
  }

  public insert(product: IProduct): Observable<IProduct> {
    const body = {
      Name: product.name,
      Description: product.description,
      Price: product.price,
      NameFile: product.nameFile
    }
    return this.http.post<IProduct>(`${this._baseUrl}api/product`, JSON.stringify(body), { headers: this.headers })
  }

  public update(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this._baseUrl}api/product`, JSON.stringify(product), { headers: this.headers })
  }

  public delete(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
        `${this._baseUrl}api/product/delete`,
        JSON.stringify(product),
        { headers: this.headers }
      )
  }

  public sendFile(selectedFile: File) {
    const formData: FormData = new FormData();
    formData.append("sendFile", selectedFile, selectedFile.name)
    return this.http.post<string>(`${this._baseUrl}api/product/fileUpload`, formData)
  }
} 