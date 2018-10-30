import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../models/patient.model';
import { SystemUser } from '../models/user.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: SystemUser [],
    sortBy: string,
    ascending?: boolean): SystemUser [] {
sortBy = 'creDate';
value = value.sort(
(a, b) =>
a[sortBy] !== b[sortBy] ? (a[sortBy] > b[sortBy] ? 1 : -1) : 0
);
if (!ascending) {
value = value.reverse();
}
return value;
}

}