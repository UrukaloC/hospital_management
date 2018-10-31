import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../models/appointment';

@Pipe({
  name: 'sortByDateAppo'
})
export class SortByDatePipeAppointment implements PipeTransform {

  transform(value: Appointment [],
    sortBy: string,
    ascending?: boolean): Appointment [] {
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