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
    @Input() data: any[] | undefined ;
    @Input() action: IDataTableAction | undefined = { actionType: '', actionCallBack: [(id: string) => { console.log(`Action: ${id}`); }] };
    datasource: any;
    isLoading: boolean = true;

    constructor() {
        this.isLoading = true;
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.isLoading = true;
        this.datasource = new MatTableDataSource(changes['data'].currentValue);
        this.datasource.sort = this.sort;
        this.isLoading = false;
    }

    ngOnInit() {
    }
    ngAfterViewInit() {
      this.isLoading = true;
        this.datasource = new MatTableDataSource(this.data);
        this.datasource.sort = this.sort;
        this.isLoading = false;
    }

}
