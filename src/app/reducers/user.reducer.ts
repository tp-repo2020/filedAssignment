import { Action } from '@ngrx/store';
import { User } from './../models/user.model';
import * as UserAction from './../actions/user.action';

const initialState:User = {
    firstName:'A',
    lastName:'B',
    phone:1234512345,
    email:'abc@gmail.com',
    monthlyAddBudget:5000
};

export function userReducer(state:User[] = [initialState], action:UserAction.Actions){
    switch(action.type){
        case UserAction.CREATE_USER:
            return [...state,action.payload]
        default :
        return state;

    }

}