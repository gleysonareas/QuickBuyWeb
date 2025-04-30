import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../shared/interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'qb-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

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

  ngOnInit(): void {
  }

  public addNewUser() {
    this.spinnerActivate = true
    this.userService.addNewUser(this.user).subscribe(
      data => {
        this.userAuthenticated = true;
        this.message = ''
        this.spinnerActivate = false
      },
      err => {
        this.message = err.error
        this.spinnerActivate = false
      }
    );
  }

}
