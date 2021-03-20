import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:AllUsersComponent},
  {path:'users', component:AllUsersComponent},
  {path:'create', component:CreateUserComponent},
  {path:'**', redirectTo:'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
