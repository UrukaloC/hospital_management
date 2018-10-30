import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DoctorService } from '../doctor.service';
import { Doctor } from '../../models/doctor.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.component.html',
  styleUrls: ['./doctor-edit-profile.component.css']
})
export class DoctorDetailComponent implements OnInit {
  doctor$: Observable<Doctor>;
  id: string;

  constructor(private doctorService: DoctorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.doctor$ = this.doctorService.getDoctor(this.id);
        }
      );
  }

  onEditDoctor() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteDoctor() {
    if (confirm('Are you sure to delete this record ?') === true) {
    this.doctorService.deleteDoctor(this.id);
  }
}
}
