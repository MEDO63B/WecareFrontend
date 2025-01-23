import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.scss']
})
export class SginupComponent implements OnInit {
    

    @Input({required: true}) doctor : boolean = false;
    
    passwordMatchValidator: ValidatorFn | null  = (control: AbstractControl): ValidationErrors | null => 
        {
            let password = control.get('password');
            let cpassword = control.get('cpassword');
            cpassword?.setErrors(password?.value !== cpassword?.value ? { 'match': true } : null);
            return password && cpassword && password.value !== cpassword.value ? { 'match': true } : null;
        };  



    signup : FormGroup = new FormGroup({});
    loading: boolean = false;
    isError: boolean = false;
    error: string = 'Failed To Fetch Data';
    
    
    constructor() {

    }
    ngOnInit() {
        if(this.doctor)
            {
                this.signup = new FormGroup({
                    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    speciality: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    email: new FormControl('', [Validators.required, Validators.email]),
                    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
                    birthdate: new FormControl('', [Validators.required]),
                    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
                    cpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
                }, 
                { validators: this.passwordMatchValidator }
            );
        }else
        {
            this.signup =  new FormGroup({
                    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    email: new FormControl('', [Validators.required, Validators.email]),
                    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
                    birthdate: new FormControl('', [Validators.required]),
                    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
                    cpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
                }, 
                { validators: this.passwordMatchValidator }
            );
        }

        
        this.signup.valueChanges.subscribe((data) => {
            this.isError = false;
        })
    }
    
    handlesignup() {
        console.log(this.signup.value);
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.isError = true;
        }, 3000);
    }

    

}
