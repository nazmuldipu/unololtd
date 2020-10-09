import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  { path: ':product', component: IndexComponent }
];

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES)
  ]
})
export class ProductsModule { }
