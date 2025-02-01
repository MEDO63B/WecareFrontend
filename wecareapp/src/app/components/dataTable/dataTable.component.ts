import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataTable',
  templateUrl: './dataTable.component.html',
  styleUrls: ['./dataTable.component.scss']
})
export class DataTableComponent implements OnInit {

    @Input() labels: string[] = []; 
    @Input() data: any[] = [];    
    constructor() { 
        console.log(this.data)
    }

    ngOnInit() {
    }

}
