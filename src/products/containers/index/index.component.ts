import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategoryList, ProductList } from 'src/shared/data/products.data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  categoryList = ProductCategoryList;
  productList = ProductList
  products;
  category;

  constructor(private activeRoute: ActivatedRoute) {
    this.category = activeRoute.snapshot.params['category'];
  }

  ngOnInit(): void {
    if (this.category) {
      this.onCategorySelect(this.category);
    }
  }

  onCategorySelect(slug) {
    this.category = slug;
    this.products = this.productList.filter(pl => pl.category == slug);
  }

}
