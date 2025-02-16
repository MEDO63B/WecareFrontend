import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClinicSchedule } from 'src/app/interfaces/clinic/schedule.clinic';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
import { ClinicFormService } from 'src/app/services/clinic/clinic-form.service';
import { ScheduleClinicService } from 'src/app/services/clinic/schedule.clinic.service';

@Component({
  selector: 'app-clinic-reservation',
  templateUrl: './clinic-reservation.component.html',
  styleUrls: ['./clinic-reservation.component.scss'],
})
export class ClinicReservationComponent implements OnInit {
  data: IClinicSchedule | undefined;
  schedulelabels: string[] = ['date', 'time', 'action'];
  scheduleaction: IDataTableAction = {
    actionType: 'Delete',
    actionCallBack: [(id: string) => {
      console.log(`Deleted: ${id}`);
    }]
  }

  reserverLabels: string[] = ['id','name', 'description', 'action'];
  reserverAction: IDataTableAction = {
    actionType: 'Checkin',
    actionCallBack: [(id: string) => {
      console.log(`Checkin: ${id}`);
    }]
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private clinicScheduleService: ScheduleClinicService,
    private clinicFormService: ClinicFormService
  ) {
    activeRoute.params.subscribe((params) => {
      console.log(params);
      this.data = this.clinicScheduleService.mockData.filter(
        (item) => item.clinic.id == params['id']
      )[0];
    });
  }


  ngOnInit() {}
}
