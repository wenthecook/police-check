import { Component, OnInit, Input } from '@angular/core';

import {Customer} from '../Customer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
