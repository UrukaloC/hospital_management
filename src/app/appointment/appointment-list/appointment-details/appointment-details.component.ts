import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../../../models/appointment';
// import { AppointmentListComponent } from '../appointment-list';




@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentItemComponent implements OnInit {
  @Input() appointments: Appointment;
  @Input() index: number;
  ngOnInit() {
  }
}
