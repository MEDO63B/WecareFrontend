import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

    labels = ['id', 'email', 'description', 'action'];
    data = [
        {id: 1, email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor', action: 'Edit'},
        {id: 2, email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor', action: 'Checkin'},
        {id: 3, email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor', action: 'Delete'},
        {id: 4, email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor', action: 'Delete'},
        {id: 5, email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor', action: 'Delete'},
    ]
  constructor() { }

  ngOnInit() {
  }

}
