import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { AppState } from '../app.state';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users:Observable<User[]>

  constructor(private store:Store<AppState>){
    this.users = this.store.select('users');
  }

  ngOnInit(): void {
  }

}
