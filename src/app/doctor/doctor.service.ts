import { Injectable } from "@angular/core";
import { Doctor } from "../models/doctor.model";
import { Observable } from "rxjs";
import { v4 as uuid } from 'uuid';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class DoctorService {

  doctor: AngularFireList<Doctor>;

  doctorsChanged = new Observable<Doctor[]>();
    constructor( private _db: AngularFireDatabase) { }

    getDoctors(): Observable<Doctor[]> {
        return this._db.list<Doctor>('doctors', ref => ref.orderByKey()).valueChanges();
    }

   
    getDoctor(personalId: string): Observable<Doctor> {
        return this._db.object<Doctor>(`doctors/${personalId}`).valueChanges();
    } 

    addDoctor(newDoctor: Doctor): void {
        newDoctor.uid = uuid();
        let fbDoctor = this._db.object('doctors/' + newDoctor.uid).set(newDoctor);    
    }

    updateDoctor(doctor: Doctor) {
        const doctorRef = this._db.object<Doctor>(`doctors/${doctor.uid}`);
        doctorRef.update(doctor);
    }

    deleteDoctor(doctorUID: string) {
        const doctorRef = this._db.object<Doctor>(`doctors/${doctorUID}`).remove();   
    }    
  }

