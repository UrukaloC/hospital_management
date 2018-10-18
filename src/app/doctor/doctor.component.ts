import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  loggedinUser$: Observable<User>;
  
  ngOnInit() {
    this.loggedinUser$ = this.authService.getLoggedInUser();
  }

  constructor(private _location: Location, private authService: AuthenticationService) {  }
  backClicked() {
    this._location.back();
   }

   public logout(): void {
    this.authService.logout();
  }

}