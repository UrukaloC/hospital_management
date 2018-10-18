import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, NgModel} from '@angular/forms';

import {ErrorMessage} from '../models/error-message';
import {User} from '../models/user';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public errorMessage: ErrorMessage = new ErrorMessage();
  public userToCreate: User = new User();
  public confirmPassword: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  public signUp(form: NgForm): void {
    this.authService.signUp(this.userToCreate, this.errorMessage);
  }

  public isInputInvalid(templateReferenceVariable: NgModel): boolean {
    const inputControl: FormControl = templateReferenceVariable.control;
    return inputControl.invalid && (inputControl.dirty || inputControl.touched);
  }

  public hasError(input: NgModel, errorName: string): boolean {
    return input.control.errors[errorName];
  }

  public applyValidationClass(input: NgModel): string {
    return this.isInputInvalid(input) ? 'is-invalid' : '';
  }
}
