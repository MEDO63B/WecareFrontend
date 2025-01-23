import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Input() direction: boolean = false;
    isAdmin: boolean = false;
    isDoctor: boolean = false;
    isUser: boolean = false;
    constructor(private userService: UserService) { 
        this.userService.isAdmin.subscribe(value => this.isAdmin = value);
        this.userService.isDoctor.subscribe(value => this.isDoctor = value);
        this.userService.isUser.subscribe(value => this.isUser = value);
    }

    ngOnInit() {
    }

}
