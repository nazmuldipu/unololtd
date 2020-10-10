import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

export const ROUTES: Routes = [
  { path: ':category', component: IndexComponent }
];

@NgModule({
  declarations: [IndexComponent, NavbarComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES)
  ]
})
export class ProductsModule { }
