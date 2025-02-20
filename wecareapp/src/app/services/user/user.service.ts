import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isAdmin:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isDoctor:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isUser:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

constructor() {

}

}
