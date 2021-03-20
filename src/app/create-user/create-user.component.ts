import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    phone:[null,[Validators.required, Validators.maxLength(10),Validators.minLength(10)]],
    email:['',[Validators.required]],
    monthlyAddBudget:[null,[Validators.required]]
  })
  constructor(private fb:FormBuilder, public paymentService:PaymentService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    let first = this.createUserForm.controls['firstName'].value;
    let last = this.createUserForm.controls['lastName'].value;
    this.createUserForm.patchValue({
      monthlyAddBudget:+this.createUserForm.controls['monthlyAddBudget'].value,
      phone:+this.createUserForm.controls['phone'].value,
      firstName:first.replace(/ /g,''),
      lastName:last.replace(/ /g,'')
    });
    this.paymentService.createUser(this.createUserForm.value);
    this.createUserForm.reset();
  }

}
