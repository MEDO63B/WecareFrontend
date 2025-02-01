import { Component, Input, OnInit } from '@angular/core';
import { IReservationCard } from 'src/app/interfaces/doctor/reservation.user';

@Component({
  selector: 'app-reservationCard',
  templateUrl: './reservationCard.component.html',
  styleUrls: ['./reservationCard.component.scss']
})
export class ReservationCardComponent implements OnInit 
{
    @Input({required: true}) inList: boolean = false;

    reservation: IReservationCard;
    
  constructor() { 
    this.reservation = {
        id: '1',
      area: 'cairo',
      phone: '1015166600',
      doctor: {
          name: 'Dr. John Doe',
          speciality: 'Cardiologist'
        }
    }
}

  ngOnInit() {
  }

  handleView(id: string) {
      console.log(id);
  }
}
