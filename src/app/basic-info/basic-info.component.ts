import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../Customer';
import { CustomerDataService } from '../customer-data.service';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  form: FormGroup;
  customers: Customer[];
  selectedCustomer: Customer = { name: null, address: null, passportid: null};

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private customerDataService: CustomerDataService,
    private apiService: ApiService,
  ) {
    this.form = this.formBuilder.group({
      name: '',
      address: '',
      passportId: ''
    });
  }

  ngOnInit(): void {
    this.apiService.readCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
      console.log(this.customers);
    }
    );
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  createCustomer(form){
    if (confirm('Are you ready to upload the personal information?')) {
      this.apiService.createCustomer(form.value).subscribe((customer: Customer) => {
        console.log('Customer created, ', customer);
        this.apiService.setCurrentCustomer(customer);
      });
      this.router.navigate(['/upload']);
    }
  }

  backToDashboard(){
    // TODO: check if form is filled and alert
    this.location.back();
  }

  onSubmit(customerData) {
    console.log('Data submitted', customerData);
    // TODO: add data to service
    this.customerDataService.add(customerData);
    this.router.navigate(['/upload']);
  }

}
