export class SystemUser {
    name: string;
    surname: string;
    lbo: string;
    birthPlace: string;
    birthDate: string;

    constructor(name: string, surname: string, lbo: string, birthPlace: string, birthDate: string){
        this.name = name;
        this.surname = surname;
        this.lbo = lbo;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
    }
    getFullName(): string {
        return this.name + ' ' + this.surname;
    }
 }