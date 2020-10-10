import { Component, OnInit } from '@angular/core';
import { ProductCategoryList } from '../../../shared/data/products.data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categories = ProductCategoryList;

  navigate;
  about_content;
  location = 'DHAKA';
  constructor() { }

  ngOnInit() { }

  onNavigate(nav) {
    this.navigate = nav;
    switch (nav) {
      case 'ABOUT_US':
        // window.scrollTo(100, 500);
        break;
      case 'SERVICES':
        // window.scrollTo(30, 200);
        break;
      case 'OUR_EXPERIENCE':
        // window.scrollTo(300, 500);
        break;
      case 'BLOG':
        // window.scrollTo(300, 500);
        break;
      case 'CONTACTS':
        // window.scrollTo(300, 500);
        break;
    }
  }

  onLocation(loc) {
    this.location = loc;
  }

  onAboutus(cont) {
    // window.scrollT o(100, 500);
    this.navigate = 'ABOUT_US';
    this.about_content = cont;
  }

  backToMain() {
    this.navigate = null;
    window.scrollTo(0, 0);
  }
}
