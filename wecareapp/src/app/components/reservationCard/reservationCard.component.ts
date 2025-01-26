import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservationCard',
  templateUrl: './reservationCard.component.html',
  styleUrls: ['./reservationCard.component.scss']
})
export class ReservationCardComponent implements OnInit 
{
reservation: any;

  constructor() { 
    this.reservation = {
      id: 1,
      date: '01/01/2019',
      time: '10:00',
      doctor: {
        name: 'Dr. John Doe',
        speciality: 'Cardiologist'
      }
    }
  }

  ngOnInit() {
  }

}
