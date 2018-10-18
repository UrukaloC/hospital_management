import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Appointment } from '../../models/appointment';
import { AppointmentService } from '../appointment.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AppointmentEditComponent implements OnInit {
  id: string;
  editMode = false;
  appointmentForm: FormGroup;
  appointmentToUpdate: Appointment;


  constructor(private route: ActivatedRoute,
              private appointmentService: AppointmentService,
              private router: Router) {

  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      Object.assign(this.appointmentToUpdate, this.appointmentForm.value);
      this.appointmentService.updateAppointment(this.appointmentToUpdate);
    } else {
      this.appointmentService.addAppointment(this.appointmentForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    this.appointmentForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'doctorName': new FormControl('', Validators.required),
      'diagnosis': new FormControl('', Validators.required),
    });

    if (this.editMode) {
      const appointment = this.appointmentService.getAppointment(this.id).subscribe(appointment => {
        this.appointmentForm.get('name').setValue(appointment.name);
        this.appointmentForm.get('surname').setValue(appointment.surname);
        this.appointmentForm.get('date').setValue(appointment.date);
        this.appointmentForm.get('doctorName').setValue(appointment.doctorName);
        this.appointmentForm.get('diagnosis').setValue(appointment.diagnosis);
        


        this.appointmentToUpdate = appointment;
      });
    };
  }
}