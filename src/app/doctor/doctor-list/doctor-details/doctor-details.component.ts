import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../../../models/doctor.model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorItemComponent implements OnInit {
  @Input() doctors: Doctor;
  @Input() index: number;
  
  ngOnInit() {
  }
}
