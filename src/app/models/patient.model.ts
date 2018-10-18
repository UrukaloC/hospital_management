import { SystemUser } from "./user.model";
import { BloodType } from "./bloodType.model";

export class Patient extends SystemUser {
    uid?: number;
    height: number;
    weight: number;
    bloodType: string;
    chosenDoctor: string;
    
    constructor(name, surname, lbo, birthPlace, birthDate, uid, height, weight, bloodType, chosenDoctor){
        super(name, surname, lbo, birthPlace, birthDate);
        this.uid = uid;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.chosenDoctor = chosenDoctor;
    }

    getBmi(): number {
        return Math.round(this.weight /(this.height*this.height)) 
    }
 }