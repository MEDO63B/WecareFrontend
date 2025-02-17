import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  scheduleForm: FormGroup;
  constructor() {
    this.scheduleForm = new FormGroup({
      time: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
   }

   handleSubmit() {
    if (this.scheduleForm.valid) {
      console.log(this.scheduleForm.value);
    }
  }

  handleReset()
  {
    this.scheduleForm.reset();
  }

}
