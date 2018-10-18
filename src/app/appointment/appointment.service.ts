import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FilterPipe } from '../doctor/doctor-list/doctor-details/filter.pipe';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { v4 as uuid } from 'uuid';
import { Appointment } from '../models/appointment';


@Injectable()
export class AppointmentService {

  appointment: AngularFireList<Appointment>;

  appointmentsChanged = new Observable<Appointment[]>();
    constructor( private _db: AngularFireDatabase) { }

    getAppointments(): Observable<Appointment[]> {
        return this._db.list<Appointment>('appointments', ref => ref.orderByKey()).valueChanges();
    }

   
    getAppointment(personalId: string): Observable<Appointment> {
        return this._db.object<Appointment>(`appointments/${personalId}`).valueChanges();
    } 

    addAppointment(newAppointment: Appointment): void {
        newAppointment.uid = uuid();
        let fbAppointment = this._db.object('appointments/' + newAppointment.uid).set(newAppointment);    
    }

    updateAppointment(appointment: Appointment) {
        const appointmentRef = this._db.object<Appointment>(`appointments/${appointment.uid}`);
        appointmentRef.update(appointment);
    }

    deleteAppointment(appointmentUID: string) {
        const appointmentrRef = this._db.object<Appointment>(`appointments/${appointmentUID}`).remove();   
    }    
}
