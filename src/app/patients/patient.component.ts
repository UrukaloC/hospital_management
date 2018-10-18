import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

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