import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WarmColorsComponent } from './components/warm-colors/warm-colors.component';
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
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
