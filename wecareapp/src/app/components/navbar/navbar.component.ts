import { Component, OnInit } from '@angular/core';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
import { IReservationDataRecord } from 'src/app/interfaces/user/reservation.user';
import { ReservationUserService } from 'src/app/services/user/reservation.user.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    logged: boolean = false;
    isDoctor: boolean = false;
    data: IReservationDataRecord[] | undefined;
    labels: string[] = ['area', 'clinicName', 'time', 'date', 'action'];
    action: IDataTableAction = {
      actionType: 'Cancel',
      actionCallBack: [(id: string) => { console.log(`Cancel: ${id}`); }]
     }
  constructor(private userService: UserService,private reservationService: ReservationUserService) {
    this.userService.isDoctor.subscribe(value => this.isDoctor = value);
    this.userService.isLogin.subscribe(value => this.logged = value);
    this.data = this.reservationService.mockData;
   }

  ngOnInit() {
  }



    handlelogout() {
        console.log('logout')
        this.userService.isLogin.next(false);
    }

}
