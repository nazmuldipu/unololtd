import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasClockComponent } from './canvas-clock/canvas-clock.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../home/containers/index/index.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  }
];

@NgModule({
  declarations: [AppComponent, CanvasClockComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
