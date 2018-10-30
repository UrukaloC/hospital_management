export class SystemUser {
    name: string;
    surname: string;
    lbo: string;
    birthPlace: string;
    birthDate: string;
    creDate: string;

    constructor(name: string, surname: string, lbo: string, birthPlace: string, birthDate: string, creDate: string){
        this.name = name;
        this.surname = surname;
        this.lbo = lbo;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.creDate = creDate
    }
    getFullName(): string {
        return this.name + ' ' + this.surname;
    }
 }