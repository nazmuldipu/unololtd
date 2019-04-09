import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { GlobeComponent } from './globe.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
  {
    path: '',
    component: GlobeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, GlobeComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)]
})
export class GlobeModule {}
