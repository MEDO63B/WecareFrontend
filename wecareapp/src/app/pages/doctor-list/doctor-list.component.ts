import { Component, OnInit } from '@angular/core';
import { IReservationCard } from 'src/app/interfaces/doctor/reservation.user';
import { ReservationDoctorService } from 'src/app/services/doctor/reservation.doctor.service';
import { SearchService } from 'src/app/services/search/search-service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  doctorList: IReservationCard[] | undefined  ;
  constructor(private reservationService: ReservationDoctorService, private searchService: SearchService) {
    this.doctorList = this.reservationService.mockData;
    this.searchService.searchTerm.subscribe(val => {
      this.doctorList = this.reservationService.mockData.filter(
        (doctor) =>
          doctor.area.toLowerCase().includes(val.toLowerCase()) ||
          doctor.doctor.name.toLowerCase().includes(val.toLowerCase()) ||
          doctor.phone.toLowerCase().includes(val.toLowerCase()) ||
          doctor.doctor.speciality.toLowerCase().includes(val.toLowerCase())
      );
    })
  }

  ngOnInit() {
  }

}
