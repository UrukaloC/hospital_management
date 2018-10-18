import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(doctors: any, term: any): any {
    if (term === undefined) return doctors;
    return doctors.filter(function(doctor){
      return doctor.surname.toLowerCase().includes(term.toLowerCase());
    })
  }

}
