import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router,
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
