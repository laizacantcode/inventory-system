import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentProductInfo!: any;

  constructor() {}

  ngOnInit(): void {}

  editProducts(currentData: Object) {
    this.currentProductInfo = currentData;
  }
}
