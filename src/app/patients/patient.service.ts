import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FilterPipe } from '../doctor/doctor-list/doctor-details/filter.pipe';
import { Patient } from '../models/patient.model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { v4 as uuid } from 'uuid';


@Injectable()
export class PatientService {

  patient: AngularFireList<Patient>;

  patientsChanged = new Observable<Patient[]>();
    constructor( private _db: AngularFireDatabase) { }

    getPatients(): Observable<Patient[]> {
        return this._db.list<Patient>('patients', ref => ref.orderByKey()).valueChanges();
    }

   
    getPatient(personalId: string): Observable<Patient> {
        return this._db.object<Patient>(`patients/${personalId}`).valueChanges();
    } 

    addPatient(newPatient: Patient): void {
        newPatient.uid = uuid();
        let fbPatient = this._db.object('patients/' + newPatient.uid).set(newPatient);    
    }

    updatePatient(patient: Patient) {
        const patientRef = this._db.object<Patient>(`patients/${patient.uid}`);
        patientRef.update(patient);
    }

    deletePatient(patientUID: string) {
        const patientrRef = this._db.object<Patient>(`patients/${patientUID}`).remove();   
    }    
}
