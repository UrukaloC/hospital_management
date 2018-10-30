import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { PatientService } from '../patient.service';
import { Patient } from '../../models/patient.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, OnDestroy {
  p;
  term;
  patient: AngularFireList<Patient>;
  patients: Patient[];
  subscription: Subscription;


  constructor(private patientService: PatientService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.patientService.getPatients()
      .subscribe(
        (patients: Patient[]) => {
          this.patients = patients;
        }
      );
  }
    
  onNewPatient() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
