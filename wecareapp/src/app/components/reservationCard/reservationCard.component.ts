import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReservationCard } from 'src/app/interfaces/doctor/reservation.user';

@Component({
  selector: 'app-reservationCard',
  templateUrl: './reservationCard.component.html',
  styleUrls: ['./reservationCard.component.scss']
})
export class ReservationCardComponent implements OnInit, AfterContentInit
{
    @Input({required: true}) inList: boolean = false;
    @Input() doctorData: IReservationCard | undefined;
    reservation: IReservationCard;

  constructor(private router:Router) {
    if (this.doctorData) {
      this.reservation = this.doctorData;
    } else {
      this.reservation = {
        id: '1',
        area: 'cairo',
        phone: '1015166600',
        doctor: {
          name: 'Dr. John Doe',
          speciality: 'Cardiologist',
        },
      };
    }
  }
  ngAfterContentInit(): void {
    if (this.doctorData) {
      this.reservation = this.doctorData;
    } else {
      this.reservation = {
        id: '1',
        area: 'cairo',
        phone: '1015166600',
        doctor: {
          name: 'Dr. John Doe',
          speciality: 'Cardiologist',
        },
      };
    }
  }

  ngOnInit() {
  }

  handleView(id: string) {
      console.log(id);
      this.router.navigate([`/reservation/`, id]);

  }
}
