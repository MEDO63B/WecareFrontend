import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    logged: boolean = false;
    
  constructor() {
   }

  ngOnInit() {
  }

    
    handleSignup() {
        console.log('sign up')
        
    }

    handlelogout() {
        console.log('logout')
    }

}
