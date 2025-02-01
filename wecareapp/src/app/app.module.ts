import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReservationCardComponent } from './components/reservationCard/reservationCard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SigninComponent } from './components/signin/signin.component';
import { SginupComponent } from './components/sginup/sginup.component';
import { ReportFormComponent } from './components/forms/report/reportForm.component';
import { ReportComponent } from './pages/report/report.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { ClinicListComponent } from './pages/clinic-list/clinic-list.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ClinicReservationComponent } from './pages/clinic-reservation/clinic-reservation.component';
import { SearchComponent } from './components/search/search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user/user.service';
import { ClinicFormComponent } from './components/forms/clinicForm/clinicForm.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchService } from './services/search/search-service.service';
import { DataTableComponent } from './components/dataTable/dataTable.component';

@NgModule({
  declarations: [	
    AppComponent,
    ReservationCardComponent,
    NavbarComponent,
    FooterComponent,
    TabsComponent,
    SigninComponent,
    SginupComponent,
    ReportFormComponent,
    ReportComponent,
    HomeComponent,
    DoctorListComponent,
    ClinicListComponent,
    ReservationComponent,
    AdminHomeComponent,
    ReportListComponent,
    ClinicReservationComponent,
    ClinicFormComponent,
    DashboardComponent,
    SearchComponent,
    DataTableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [UserService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
