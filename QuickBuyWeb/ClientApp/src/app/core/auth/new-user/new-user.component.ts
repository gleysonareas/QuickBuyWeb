import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../shared/model/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'qb-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public addNewUser() {
    this.userService.addNewUser(this.user).subscribe(
      data => { },
      err => { }
    );
  }

}
