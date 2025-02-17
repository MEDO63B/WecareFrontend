import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDoctorReservation, ReservationDetails } from 'src/app/interfaces/clinic/reservation.clinic';
import { IReservationCard } from 'src/app/interfaces/doctor/reservation.user';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
import { ReservationClinicService } from 'src/app/services/clinic/reservation.clinic.service';
import { ReservationDoctorService } from 'src/app/services/doctor/reservation.doctor.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  doctor: IReservationCard | undefined;
  labels: string[] = ['time', 'date', 'status', 'action'];
  action: IDataTableAction = {
    actionType: 'Reserve&Cancel',
    actionCallBack: [
      (id: string) => {
        console.log(`Reserve: ${id}`);
        //ToDo: Add user data to the reservation form
        new ElementRef<HTMLElement>(
          document.getElementById('reservebtnform') as HTMLElement
        ).nativeElement.click();
      },
      (id: string) => {
        console.log(`Cancel: ${id}`);
      },
    ],
  };
  data: ReservationDetails[] | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private doctorReservation: ReservationDoctorService,
    private clinicReservation: ReservationClinicService
  ) {

  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      console.log(params.get('id'));

      this.doctor = this.doctorReservation.mockData.filter(
        (doc: IReservationCard) => {
          return doc.id == params.get('id');
        }
      )[0];

      this.data = this.clinicReservation.mockData.filter(
        (doc: IDoctorReservation) => {
          let details =
            doc.doctor?.id == params.get('id') ? doc : undefined;
          console.log(doc);
          return details != undefined;
        }
      )[0].details;
      console.log(this.data);
    });
  }
}
