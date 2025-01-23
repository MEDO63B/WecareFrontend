import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IProfile } from 'src/app/interfaces/user/profile.user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.scss']
})
export class SginupComponent implements OnInit {
    
    handleCancel() {
        this.signup.disable();
        this.editable = false;
        switch (this.doctor) {
            case true:
                this.signup.setValue({'name':this.tempData?.name ?? '', 'email':this.tempData?.email ?? '', 'phone':this.tempData?.phone ?? '', 'birthdate':this.tempData?.birthdate ?? '', 'speciality':this.tempData?.speciality ?? ''});
                break;
            case false:
                this.signup.setValue({'name':this.tempData?.name ?? '', 'email':this.tempData?.email ?? '', 'phone':this.tempData?.phone ?? '', 'birthdate':this.tempData?.birthdate ?? ''});
                break;
        }
    }

    handleSave() {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        },3000);

        this.signup.disable();
        this.tempData = this.signup.value;
        this.editable = false;
        console.log("new values: ");
        console.log(this.signup.value);
    }
    
    handleEdit() {
        this.signup.enable();
        this.editable = true;
    }

    @Input({required: true}) doctor : boolean = false;
    @Input({required: true}) editable : boolean = false;
    @Input({required: true}) profile : boolean = false;
    
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
    tempData: IProfile | undefined ;
    mockData: IProfile = {
        name: 'medo',
        email: 'medo@mail.com',
        phone: '1234567890',
        birthdate: '31/12/1987'
    } 
    
    constructor(private userService:UserService) {

    }
    ngOnInit() {

        if(this.doctor  && !this.profile)
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
        }
        else if (!this.doctor  && !this.profile)
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
        else if (this.doctor  && this.profile)
        {
            this.signup =  new FormGroup({
                    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    speciality: new FormControl('', [Validators.required, Validators.minLength(2)]),
                    email: new FormControl('', [Validators.required, Validators.email]),
                    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
                    birthdate: new FormControl('', [Validators.required]),
                }
            );
        }
        else
        {
            this.signup =  new FormGroup({
                    name: new FormControl(this.mockData.name, [Validators.required, Validators.minLength(2)]),
                    email: new FormControl(this.mockData.email, [Validators.required, Validators.email]),
                    phone: new FormControl(this.mockData.phone, [Validators.required, Validators.minLength(10)]),
                    birthdate: new FormControl(this.mockData.birthdate, [Validators.required]),
                }
            );
            this.tempData = this.signup.value;
        }

        
        switch (this.editable) {
            case true:
                this.handleEdit();
                break;
            case false:
                this.handleCancel();
                break;
        }

        this.signup.valueChanges.subscribe((data) => {
            this.isError = false;
        })
    }
    
    handlesignup() {
        console.log(this.signup.value);
        this.loading = true;
        this.userService.isLogin.next(true);
        setTimeout(() => {
            this.loading = false;
            this.isError = true;
        }, 3000);
    }

    

}

