import { Component, OnInit } from '@angular/core';
import { ProductCategoryList } from 'src/shared/data/products.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categoryList = ProductCategoryList;
  category;

  constructor(private activeRoute: ActivatedRoute) {
    this.category = activeRoute.snapshot.params['category'];
  }

  ngOnInit(): void {
  }

  onCategorySelect(slug) {
    console.log(slug);
    this.category = slug;
  }

}
