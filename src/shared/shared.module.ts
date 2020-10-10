import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard1Component } from './components/product-card1/product-card1.component';



@NgModule({
  declarations: [ProductCard1Component],
  imports: [
    CommonModule
  ],
  exports: [ProductCard1Component]
})
export class SharedModule { }
