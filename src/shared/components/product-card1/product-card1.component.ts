import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card1',
  templateUrl: './product-card1.component.html',
  styleUrls: ['./product-card1.component.scss']
})
export class ProductCard1Component implements OnInit {
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

}
