import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
// import { AngularFireAuth } from "angularfire2/auth";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePage implements OnInit {
  loggedinUser$: Observable<User>;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.loggedinUser$ = this.authService.getLoggedInUser();
  }

  public logout(): void {
    this.authService.logout();
  }

}