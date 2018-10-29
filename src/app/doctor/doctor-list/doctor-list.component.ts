import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { DoctorService } from '../doctor.service';
import { Doctor } from '../../models/doctor.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit, OnDestroy {
  term;
  doctor: AngularFireList<Doctor>;
  doctors: Doctor[];
  subscription: Subscription;


  constructor(private doctorService: DoctorService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.doctorService.getDoctors()
      .subscribe(
        (doctors: Doctor[]) => {
          this.doctors = doctors;
        }
      );
  }
    
  onNewDoctor() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
