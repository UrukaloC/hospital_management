import { SystemUser } from "./user.model";

export class Doctor extends SystemUser {

 uid?: number;
 position: string;
 constructor(name, surname, lbo, birthPlace, birthDate, uid, position){
   super(name, surname, lbo, birthPlace, birthDate);
   this.uid = uid;
   this.position = position;
 }
}