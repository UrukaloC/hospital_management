import { Injectable } from "@angular/core";
import { BloodType } from "../models/bloodType.model";


@Injectable()

export class BloodTypeService {
    getAllBloodTypes() :BloodType[] {
       let bloodTypeList = [];
       bloodTypeList.push(new BloodType('0','+'));
       bloodTypeList.push(new BloodType('A','+'));
       bloodTypeList.push(new BloodType('B','+'));
       bloodTypeList.push(new BloodType('AB','+'));
       bloodTypeList.push(new BloodType('0','-'));
       bloodTypeList.push(new BloodType('A','-'));
       bloodTypeList.push(new BloodType('B','-'));
       bloodTypeList.push(new BloodType('AB','-'));
       return bloodTypeList;
   }

}