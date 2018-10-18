import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

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