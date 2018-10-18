import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';
import {ErrorMessage} from '../models/error-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMessage: ErrorMessage = new ErrorMessage();
  public userRegistered: boolean;
  public email: string;
  public password: string;

  constructor(private activeRoute: ActivatedRoute, private authService: AuthenticationService) { }
  

  ngOnInit() {
    this.showSuccessRegistrationMessage();
  }

  public performLogin(): void {
    this.authService.login(this.email, this.password, this.errorMessage);
  }

  private showSuccessRegistrationMessage() {
    if (this.activeRoute.snapshot.params['userRegistered']) {
      this.userRegistered = true;
    }
  }
}
