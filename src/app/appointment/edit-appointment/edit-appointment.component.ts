import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { AppointmentService } from '../appointment.service';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class AppointmentDetailComponent implements OnInit {
  appointments$: Observable<Appointment>;
  id: string;
  constructor(private appointmentService: AppointmentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.appointments$ = this.appointmentService.getAppointment(this.id);
        }
      );
  }

  onEditAppointment() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteAppointment() {
    if (confirm('Are you sure to delete this record ?') === true) {
    this.appointmentService.deleteAppointment(this.id);
    this.router.navigate(['/appointment']);
  }
}

}
