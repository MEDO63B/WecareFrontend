import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Input() direction: boolean = false;
    isAdmin: boolean = false;
    isDoctor: boolean = false;
    isUser: boolean = true;
    constructor() { }

    ngOnInit() {
    }

}
