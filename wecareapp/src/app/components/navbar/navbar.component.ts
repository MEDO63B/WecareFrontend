import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    logged: boolean = false;
    isDoctor: boolean = false;
    
  constructor(private userService: UserService) {
    this.userService.isDoctor.subscribe(value => this.isDoctor = value);
    this.userService.isLogin.subscribe(value => this.logged = value);
   }

  ngOnInit() {
  }

    

    handlelogout() {
        console.log('logout')
        this.userService.isLogin.next(false);
    }

}
