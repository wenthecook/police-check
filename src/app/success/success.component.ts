import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerDataService } from '../customer-data.service';
import { ApiService } from '../api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() currentCustomer: Customer;

  constructor(
    private customerDataService: CustomerDataService,
    private router: Router,
    private apiService: ApiService,
  ) { }

  getCurrentCustomer(){
    this.currentCustomer = this.apiService.currentCustomer;
  }

  ngOnInit(): void {
    this.getCurrentCustomer();
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
