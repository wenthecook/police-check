import { Injectable } from '@angular/core';

import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private customers: Customer[] = [];
  private currentCustomer: Customer;

  constructor() { }

  add(customer: Customer){
    this.customers.push(customer);
    this.currentCustomer = customer;
    console.log(`A member ${customer.name} is added.`);
  }

  clear() {
    this.currentCustomer = undefined;
    this.customers = [];
  }

  getCurrentCustomer(): Customer {
    return this.currentCustomer;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  uploadData(){}

}
