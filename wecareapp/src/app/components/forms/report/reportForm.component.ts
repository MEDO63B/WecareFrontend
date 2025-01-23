import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportForm',
  templateUrl: './reportForm.component.html',
  styleUrls: ['./reportForm.component.scss']
})
export class ReportFormComponent implements OnInit {
    
    handleReport() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.isError = true;
        },3000);
    }

    report = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        description: new FormControl('',[Validators.required,Validators.minLength(2)]),
    });

    loading: boolean = false;
    isError: boolean = false;
    error: string = 'Failed To Send Report';
    constructor() { }

    ngOnInit() {
    }

}
