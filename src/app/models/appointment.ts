import { SystemUser } from "./user.model";

export class Appointment {
    uid?: number;
    name: string;
    surname: string;
    doctorName: string;
    date: string;
    diagnosis: string;
    creDate: string;

    constructor(uid, name, surname, doctorName, date, diagnosis, creDate){
        this.uid = uid;
        this.name = name;
        this.surname = surname;
        this.doctorName = doctorName;
        this.date = date;
        this.diagnosis = diagnosis;
        this.creDate = creDate;
    }

    returnDiagnosis(){
        
    }
}