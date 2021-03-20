import { Component, OnInit } from '@angular/core';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public paymentService:PaymentService){}
  ngOnInit(){  
  }
}
