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
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'test',
    loadChildren: '../test/test.module#TestModule'
  },
  {
    path: '',
    loadChildren: '../globe/globe.module#GlobeModule'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
