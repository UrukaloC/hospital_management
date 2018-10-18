import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PatientService } from '../patient.service';
import { Patient } from '../../models/patient.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.component.html',
  styleUrls: ['./patient-edit-profile.component.css']
})
export class PatientDetailComponent implements OnInit {
  patients$: Observable<Patient>;
  id: string;

  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.patients$ = this.patientService.getPatient(this.id);
        }
      );
  }

  onEditPatient() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeletePatient() {
    this.patientService.deletePatient(this.id);
    this.router.navigate(['/patient']);
  }

}
