import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  small: boolean = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 96) {
      this.small = true;
    } else {
      this.small = false;
    }
  }
}
