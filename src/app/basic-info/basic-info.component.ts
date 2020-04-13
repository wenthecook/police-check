import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from '../Customer';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private customerDataService: CustomerDataService
  ) {
    this.form = this.formBuilder.group({
      name: '',
      address: '',
      passportId: ''
    });
  }

  ngOnInit(): void {
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
