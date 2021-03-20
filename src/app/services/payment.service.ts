import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as userAction from '../actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  showToast:boolean = false;
  constructor(private http:HttpClient, private store:Store<AppState[]>) { }

  // Since i do not app api to make post request, i am assuming that api will return success.
  createUser(user){
    this.store.dispatch(new userAction.UserAction(user))
    this.showToasterMessage(true)
  }

  showToasterMessage(val){
    this.showToast = val;
    setTimeout(() => {
      this.showToast = false
    }, 2000);
  }
}
