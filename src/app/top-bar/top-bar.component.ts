import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CustomerDataService } from '../customer-data.service';

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
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.customerDataServic.getCurrentCustomer()) {
      if (confirm('Do you want to discard filled information and back to home?')) {
        this.customerDataServic.clear();
        this.router.navigate(['/']);
      }
    }
    else {
      this.router.navigate(['/']);
    }
  }

}
