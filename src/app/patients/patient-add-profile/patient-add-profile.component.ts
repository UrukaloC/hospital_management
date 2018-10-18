import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PatientService } from '../patient.service';
import { BloodType } from '../../models/bloodType.model';
import { BloodTypeService } from '../../services/bloodType.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-add-profile',
  templateUrl: './patient-add-profile.component.html',
  styleUrls: ['./patient-add-profile.component.css']
})
export class PatientEditComponent implements OnInit {
  id: string;
  editMode = false;
  patientForm: FormGroup;
  bloodTypes: BloodType[];
  patientToUpdate: Patient;


  constructor(private route: ActivatedRoute,
              private bloodTypeService: BloodTypeService,
              private patientService: PatientService,
              private router: Router) {

  }

  ngOnInit() {
    this.bloodTypes = this.bloodTypeService.getAllBloodTypes();

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
      Object.assign(this.patientToUpdate, this.patientForm.value);
      this.patientService.updatePatient(this.patientToUpdate);
    } else {
      this.patientService.addPatient(this.patientForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    this.patientForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required),
      'lbo': new FormControl('', Validators.required),
      'birthPlace': new FormControl('', Validators.required),
      'birthDate': new FormControl('', Validators.required),
      'height': new FormControl('', Validators.required),
      'weight': new FormControl('', Validators.required),
      'bloodType': new FormControl('', Validators.required),
      'chosenDoctor': new FormControl('', Validators.required)
    });

    if (this.editMode) {
      const patient = this.patientService.getPatient(this.id).subscribe(patient => {
        this.patientForm.get('name').setValue(patient.name);
        this.patientForm.get('surname').setValue(patient.surname);
        this.patientForm.get('lbo').setValue(patient.lbo);
        this.patientForm.get('birthPlace').setValue(patient.birthPlace);
        this.patientForm.get('birthDate').setValue(patient.birthDate);
        this.patientForm.get('height').setValue(patient.height);
        this.patientForm.get('weight').setValue(patient.weight);
        this.patientForm.get('bloodType').setValue(patient.bloodType);
        this.patientForm.get('chosenDoctor').setValue(patient.chosenDoctor);


        this.patientToUpdate = patient;
      });
    };
  }
}