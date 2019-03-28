import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globe',
  template: `
    <router-outlet></router-outlet>
  `
  // templateUrl: './globe.component.html',
  // styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
