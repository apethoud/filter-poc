import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WarmColorsComponent } from './components/warm-colors/warm-colors.component';
import { CoolColorsComponent } from './components/cool-colors/cool-colors.component';
import { TriadColorsComponent } from './components/triad-colors/triad-colors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'warm-colors',
    component: WarmColorsComponent,
    title: 'Warm Colors',
  },
  {
    path: 'cool-colors',
    component: CoolColorsComponent,
    title: 'Cool Colors',
  },
  {
    path: 'triad-colors',
    component: TriadColorsComponent,
    title: 'Triad Colors',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
