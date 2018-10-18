import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DoctorService } from '../doctor.service';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctor-add-profile',
  templateUrl: './doctor-add-profile.component.html',
  styleUrls: ['./doctor-add-profile.component.css']
})
export class DoctorEditComponent implements OnInit {
  id: string;
  editMode = false;
  doctorForm: FormGroup;
  doctorToUpdate: Doctor;

  constructor(private route: ActivatedRoute,
              private doctorService: DoctorService,
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
      Object.assign(this.doctorToUpdate, this.doctorForm.value);
      this.doctorService.updateDoctor(this.doctorToUpdate);
    } else {
      this.doctorService.addDoctor(this.doctorForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    this.doctorForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required),
      'lbo': new FormControl('', Validators.required),
      'birthPlace': new FormControl('', Validators.required),
      'birthDate': new FormControl('', Validators.required),
      'position': new FormControl('', Validators.required),
    });

    if (this.editMode) {
      const doctor = this.doctorService.getDoctor(this.id).subscribe(doctor => {
        this.doctorForm.get('name').setValue(doctor.name);
        this.doctorForm.get('surname').setValue(doctor.surname);
        this.doctorForm.get('lbo').setValue(doctor.lbo);
        this.doctorForm.get('birthPlace').setValue(doctor.birthPlace);
        this.doctorForm.get('birthDate').setValue(doctor.birthDate);
        this.doctorForm.get('position').setValue(doctor.position);

        this.doctorToUpdate = doctor;
      });
    };
  }
}

