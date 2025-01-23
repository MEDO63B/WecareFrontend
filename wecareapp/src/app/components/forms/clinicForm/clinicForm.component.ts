import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IClinic } from 'src/app/interfaces/clinic/add.clinic';

@Component({
  selector: 'app-clinicForm',
  templateUrl: './clinicForm.component.html',
  styleUrls: ['./clinicForm.component.scss']
})
export class ClinicFormComponent implements OnInit {
    
    @Input({required: true}) editable: boolean = false;
    
    clinic : FormGroup = new FormGroup({})
    loading: boolean = false;
    isError: boolean = false;
    error: string = 'Failed To Send Data';
    tempData: IClinic | undefined;
    mockData: IClinic = {
        name: 'medo',
        phone: '1234567890',
        area: 'Clinic Area'
    }

    constructor() { }

    ngOnInit() {
        
        if(this.editable)
        {
            this.tempData = this.mockData;
            this.clinic = new FormGroup({
                name: new FormControl(this.tempData?.name,[Validators.required]),
                phone: new FormControl(this.tempData?.phone,[Validators.required]),
                area: new FormControl(this.tempData?.area,[Validators.required]),
            })
        }else{
            this.clinic = new FormGroup({
                name: new FormControl('',[Validators.required]),
                phone: new FormControl('',[Validators.required]),
                area: new FormControl('',[Validators.required]),
            });
        }
    }
    
    handleClinic()
    {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.isError = true;
        },3000);
        console.log(this.clinic.value);
    }
    
    handleSave() {
        console.log(this.clinic.value);
        this.editable = false;
        this.tempData = this.clinic.value;
    }
    handleCancel() {
        this.clinic.setValue({'name':this.tempData?.name ?? '', 'phone':this.tempData?.phone ?? '', 'area':this.tempData?.area ?? ''});
        this.editable = false;
    }
}
