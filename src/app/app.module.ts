import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './reducers/user.reducer';
import { AllUsersComponent } from './all-users/all-users.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      users:userReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
