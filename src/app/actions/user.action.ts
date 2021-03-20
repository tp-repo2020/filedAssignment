import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const CREATE_USER = '[USER] add';

export class UserAction implements Action {
    type = CREATE_USER;
    constructor(public payload:User){}
}


export type Actions = UserAction;