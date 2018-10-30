import { SystemUser } from "./user.model";

export class Doctor extends SystemUser {

 uid?: number;
 position: string;
 constructor(name, surname, lbo, birthPlace, birthDate, uid, position, creDate){
   super(name, surname, lbo, birthPlace, birthDate, creDate);
   this.uid = uid;
   this.position = position;
 }
}