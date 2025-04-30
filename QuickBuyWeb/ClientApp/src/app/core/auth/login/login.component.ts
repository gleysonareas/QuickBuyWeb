import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../shared/interfaces/user.interface';
import { UserService } from "../../services/user.service";
// import { error } from "util";

@Component({
  selector: 'qb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public imagePath: string = "../assets/buy-logo.jpg"
  public userAuthenticated: boolean;
  public user: IUser;
  public returnUrl: string = '';
  public message: string
  public spinnerActivate: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = <IUser>{};
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  ngOnInit(): void { }

  public enter(): void {
    this.spinnerActivate = true;
    this.userService.verifyUser(this.user).subscribe(
      data => {
        // console.log(data)
        // if (data.email === 'gleysonareasdasilva@gmail.com' && this.user.password === 'Gyn.4539766') {
        // sessionStorage.setItem('user-is-logged', '1');
        // sessionStorage.setItem('user-email', data.email);
        // this.userAuthenticated = true;
        this.userService.user = data;
        if (!this.returnUrl)
          this.router.navigate(['/'])
        else
          this.router.navigate([this.returnUrl]);
        // }
        this.spinnerActivate = false;
      },
      err => {
        // console.log(err.error)
        this.message = err.error
        this.spinnerActivate = false;
      }
    );
  }
}

