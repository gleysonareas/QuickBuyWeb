import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../../shared/model/user.interface";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiPath = 'api/user'

  private _user: IUser
  get user(): IUser {
    this._user = JSON.parse(sessionStorage.getItem('user-authenticated'));
    return this._user;
  }
  set user(user: IUser) {
    sessionStorage.setItem("user-authenticated", JSON.stringify(user))
    this._user = user;
  }

  constructor(
    @Inject('BASE_URL') public baseUrl: string,
    private http: HttpClient,
  ) { }

  public userAuth(): boolean {
    return this._user != null && this._user.email != "" && this._user.password != "";
  }

  public clearSession() {
    sessionStorage.clear();
    this._user = null;
  }

  public verifyUser(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: user.email,
      password: user.password
    }
    // http://localhost:8080
    return this.http.post<IUser>(`${this.baseUrl}/${this.apiPath}/verifyUser`, body, { headers });
  }

  public addNewUser(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: user.email,
      password: user.password,
      name: user.name,
      lastName: user.lastName,
    }
    return this.http.post<IUser>(`${this.baseUrl}/${this.apiPath}`, body, { headers })
  }
} 