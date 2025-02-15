import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { ClinicListComponent } from './pages/clinic-list/clinic-list.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ClinicReservationComponent } from './pages/clinic-reservation/clinic-reservation.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'doctorList',
        component: DoctorListComponent
    },
    {
        path: "clinicList",
        component: ClinicListComponent
    },
    {
        path: 'reservation/:id',
        component: ReservationComponent
    },
    {
        path: 'dashboard',
        component: AdminHomeComponent
    },
    {
        path: 'reportList',
        component: ReportListComponent
    },
    {
        path: 'clinic/:id',
        component: ClinicReservationComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
