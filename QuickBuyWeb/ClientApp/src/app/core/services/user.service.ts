import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../../shared/model/user.interface";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiPath = 'api/user'
  private baseURL: string

  constructor(
    @Inject('BASE_URL') public baseUrl: string,
    private http: HttpClient,
  ) { }


  public verifyUser(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: user.email,
      password: user.password
    }
    // http://localhost:8080
    return this.http.post<IUser>(`${this.baseURL}/${this.apiPath}`, body, { headers });
  }
} 