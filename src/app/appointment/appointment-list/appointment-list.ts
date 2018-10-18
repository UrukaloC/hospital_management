import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { AngularFireList } from 'angularfire2/database';
import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.html',
  styleUrls: ['./appointment-list.css']
})
export class AppointmentListComponent implements OnInit, OnDestroy {
 
  appointment: AngularFireList<Appointment>;
  appointments: Appointment[];
  subscription: Subscription;


  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.appointmentService.getAppointments()
      .subscribe(
        (appointments: Appointment[]) => {
          this.appointments = appointments;
        }
      );
  }
    
  onNewAppointment() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
