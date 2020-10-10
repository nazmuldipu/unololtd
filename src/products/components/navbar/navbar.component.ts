import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  small: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}