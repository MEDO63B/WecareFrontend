import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IReserveFormUser } from 'src/app/interfaces/user/reserve.form.user';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {


  user:IReserveFormUser|undefined;
  reservationForm : FormGroup;

  constructor() {
    let userMockData: IReserveFormUser = {
      name: 'John',
      phone: '1234567890',
      description: 'I have a Problem in my stomach '
    }

    this.user = userMockData;
    this.reservationForm = new FormGroup({
      name: new FormControl(this.user?.name,Validators.required),
      phone: new FormControl(this.user?.phone,Validators.required),
      description: new FormControl(this.user?.description,Validators.required),
    });
  }

  handleSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
    }
  }
}
