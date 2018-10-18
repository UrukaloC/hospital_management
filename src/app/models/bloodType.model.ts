export class BloodType {
    bloodType: string;
    rhFactor: string;

    constructor(bloodType, rhFactor){
        this.bloodType = bloodType;
        this.rhFactor = rhFactor;
    }

    returnFullName(){
        return this.bloodType + this.rhFactor
    }
}