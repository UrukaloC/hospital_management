import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { HomePage } from './app/homepage/home-page.component';
import { DoctorComponent } from './app/doctor/doctor.component';
import { DoctorEditComponent } from './app/doctor/doctor-add-profile/doctor-add-profile.component';
import { DoctorDetailComponent } from './app/doctor/doctor-edit-profile/doctor-edit-profile.component';
import { PatientComponent } from './app/patients/patient.component';
import { PatientEditComponent } from './app/patients/patient-add-profile/patient-add-profile.component';
import { PatientDetailComponent } from './app/patients/patient-edit-profile/patient-edit-profile.component';
import { AppointmentComponent } from './app/appointment/appointment.component';
import { AppointmentEditComponent } from './app/appointment/add-appointment/add-appointment.component';
import { AppointmentDetailComponent } from './app/appointment/edit-appointment/edit-appointment.component';
import { ProtectedRouteGuard } from './app/security/protected-route-guard.guard';

const Hospital: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'doctor', component: DoctorComponent, canActivate: [ProtectedRouteGuard], children: [
    { path: 'new', component: DoctorEditComponent },
    { path: ':id', component: DoctorDetailComponent },
    { path: ':id/edit', component: DoctorEditComponent },
  ] },
  
  { path: 'homepage', component: HomePage, canActivate: [ProtectedRouteGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full'},

  { path: 'patient', component: PatientComponent, canActivate: [ProtectedRouteGuard], children: [
    { path: 'new', component: PatientEditComponent },
    { path: ':id', component: PatientDetailComponent },
    { path: ':id/edit', component: PatientEditComponent }

  ] },
  { path: 'appointment', component: AppointmentComponent,canActivate: [ProtectedRouteGuard], children: [
    { path: 'new', component: AppointmentEditComponent },
    { path: ':id', component: AppointmentDetailComponent },
    { path: ':id/edit', component: AppointmentEditComponent }

  ] },
  { path: '**', component: PageNotFoundComponent },

  // dupla redirekcija
  { path: ':patient', component: PatientComponent},
  { path: ':doctor', component: DoctorComponent},
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(Hospital)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
