import { Component, ElementRef, OnInit } from '@angular/core';
import { IClinicEdit } from 'src/app/interfaces/clinic/edit.clinic';
import { IClinicList } from 'src/app/interfaces/clinic/list.clinic';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
import { ClinicFormService } from 'src/app/services/clinic/clinic-form.service';
import { SearchService } from 'src/app/services/search/search-service.service';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss']
})
export class ClinicListComponent implements OnInit {

    data: IClinicList[] | undefined ;

    labels: string[] = ['name', 'area', 'no. of reservation', 'action'];
    action: IDataTableAction = {
        actionType: 'Edit',
        actionCallBack: (id: string) => {
            console.log(`Action: ${id}`);
            let clinic = this.data?.find((item) => item.id == id) as IClinicEdit;
            this.clinicServie.setCurrentClinic(clinic);
            new ElementRef<HTMLElement>(document.querySelector('#editbtn') as HTMLElement).nativeElement.click();
        }
    };
    constructor(private clinicServie: ClinicFormService, private serachService: SearchService) {
      this.serachService.searchTerm.subscribe(val => {
          this.data = this.clinicServie.mockData.filter(item => item.name.toLowerCase().includes(val.toLowerCase()) || item.area?.toLowerCase().includes(val.toLowerCase()));
      })
      this.data = this.clinicServie.mockData;
  }

  ngOnInit() {
  }

}
