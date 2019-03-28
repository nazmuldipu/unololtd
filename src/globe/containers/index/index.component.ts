import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  navigate;
  constructor() {}

  ngOnInit() {}

  onNavigate(nav) {
    console.log(nav);
    this.navigate = nav;
    switch (nav) {
      case 'ABOUT_US':
        window.scrollTo(100, 500);
        break;
      case 'SERVICES':
        window.scrollTo(30, 200);
        break;
      case 'OUR_EXPERIENCE':
        window.scrollTo(300, 500);
        break;
      case 'BLOG':
        window.scrollTo(300, 500);
        break;
      case 'CONTACTS':
        window.scrollTo(300, 500);
        break;
    }
  }
  backToMain() {
    this.navigate = null;
    window.scrollTo(0, 0);
  }
}
