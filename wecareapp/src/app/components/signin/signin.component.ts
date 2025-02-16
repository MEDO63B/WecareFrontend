import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    signin = new FormGroup(
        {
            'email' : new FormControl('',[Validators.required,Validators.email]),
            'password' : new FormControl('',[Validators.required, Validators.minLength(6)])
        }
    );
    
    loading: boolean = false;
    isError: boolean = false;
    error: string = 'Failed To Fetch Data';
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.signin.valueChanges.subscribe((data) => {
            this.isError = false;
        })
    }
    
    handleSignin() {
        console.log(`sign in email: ${this.signin.value.email} ,pass: ${this.signin.value.password}`);
        this.loading = true;
        this.userService.isLogin.next(true);
        setTimeout(() => {
            this.loading = false;
            this.isError = true;
        }, 3000);
    }
    
}
 