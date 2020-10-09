import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CanvasClockComponent } from './canvas-clock/canvas-clock.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../home/containers/index/index.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'test',
    loadChildren: () => import('../test/test.module').then(m => m.TestModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '',
    loadChildren: () => import('../globe/globe.module').then(m => m.GlobeModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
