import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinic-reservation',
  templateUrl: './clinic-reservation.component.html',
  styleUrls: ['./clinic-reservation.component.css']
})
export class ClinicReservationComponent implements OnInit {

    constructor(private activeRoute: ActivatedRoute) {
        activeRoute.params.subscribe(params => {
            console.log(params);
    });
  }

  ngOnInit() {
  }

}
