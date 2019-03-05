import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from 'src/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { IntroComponent } from './components/intro/intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    FeaturesComponent,
    IntroComponent,
    NavbarComponent,
    WhyUsComponent,
    FooterComponent,
    ExperienceComponent
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
