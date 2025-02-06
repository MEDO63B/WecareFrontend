import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
@Component({
    selector: 'app-dataTable',
    templateUrl: './dataTable.component.html',
    styleUrls: ['./dataTable.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

    @ViewChild(MatSort) sort!: MatSort;
    @Input() labels: string[] = [];
    @Input() data: any[] = [];
    @Input() action: IDataTableAction = { actionType: '', actionCallBack: (id: string) => { console.log(`Action: ${id}`); } };
    datasource: any;
    
    constructor() {
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.datasource = new MatTableDataSource(changes['data'].currentValue);
        this.datasource.sort = this.sort;
    }

    ngOnInit() {
    }
    ngAfterViewInit() {
        this.datasource = new MatTableDataSource(this.data);
        this.datasource.sort = this.sort;
    }

}
