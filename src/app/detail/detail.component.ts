import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

import {Customer} from '../Customer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() customer: Customer;
  @Input() success = false;

  constructor(
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    if (confirm('Do you want to go back and delete the input information?')){
      this.apiService.clear();
      this.router.navigate(['/basic-info']);
    }
  }

}
