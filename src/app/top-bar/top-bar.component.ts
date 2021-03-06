import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CustomerDataService } from '../customer-data.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private location: Location,
    private customerDataServic: CustomerDataService,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.apiService.currentCustomer.name !== null) {
      if (confirm('Do you want to discard filled information and back to home?')) {
        this.apiService.clear();
        this.router.navigate(['/']);
      }
    }
    else {
      this.router.navigate(['/']);
    }
  }

  clickAboutUs() {
    if (this.apiService.currentCustomer.name !== null) {
      if (confirm('Do you want to discard filled information and back to home?')) {
        this.apiService.clear();
        this.router.navigate(['/aboutus']);
      }
    }
    else {
      this.router.navigate(['/aboutus']);
    }
  }

}
