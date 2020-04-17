import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8000";
  currentCustomer: Customer = {name: null, address: null, passportid: null};

  constructor(private httpClient: HttpClient ) { }

  readCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createCustomer(customer: Customer): Observable<Customer>{
    console.log('ready to upload', customer);
    return this.httpClient.post<Customer>(`${this.PHP_API_SERVER}/api/create.php`, customer);
  }

  setCurrentCustomer(customer: Customer): void {
    this.currentCustomer.name = customer.name;
    this.currentCustomer.address = customer.address;
    this.currentCustomer.passportid = customer.passportid;
  }
}
