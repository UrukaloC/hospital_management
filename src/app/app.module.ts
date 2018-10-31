import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'font-awesome';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouterModule } from '../AppRouterModule';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { environment } from '../environments/environment';
import { ProtectedRouteGuard } from './security/protected-route-guard.guard';
import { StringsAreEqualsValidatorDirective } from './validators/strings-are-equals-validator.directive';
import { HomePage } from './homepage/home-page.component';
import { DoctorService } from './doctor/doctor.service';
import { DoctorDetailComponent } from './doctor/doctor-edit-profile/doctor-edit-profile.component';
import { DoctorItemComponent } from './doctor/doctor-list/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './doctor/doctor-add-profile/doctor-add-profile.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { FilterPipe } from './doctor/doctor-list/doctor-details/filter.pipe';
import { PatientComponent } from './patients/patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientDetailComponent } from './patients/patient-edit-profile/patient-edit-profile.component';
import { PatientItemComponent } from './patients/patient-list/patient-details/patient-details.component';
import { PatientEditComponent } from './patients/patient-add-profile/patient-add-profile.component';
import { PatientService } from './patients/patient.service';
import { BloodTypeService } from './services/bloodType.service';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list';
import { AppointmentDetailComponent } from './appointment/edit-appointment/edit-appointment.component';
import { AppointmentEditComponent } from './appointment/add-appointment/add-appointment.component';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentItemComponent } from './appointment/appointment-list/appointment-details/appointment-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortByDatePipe } from './pipes/systemuser-date';
import { SortByDatePipeAppointment } from './pipes/appointment-date';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorListComponent,
    DoctorDetailComponent,
    DoctorItemComponent,
    DoctorEditComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    HomePage,
    StringsAreEqualsValidatorDirective,
    FilterPipe,
    PatientComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientItemComponent,
    PatientEditComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    AppointmentEditComponent,
    AppointmentItemComponent,
    SortByDatePipe,
    SortByDatePipeAppointment

  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, UserService, ProtectedRouteGuard, DoctorService, PatientService, BloodTypeService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
