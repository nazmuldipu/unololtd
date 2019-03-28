import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <router-outlet></router-outlet>
  `
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
