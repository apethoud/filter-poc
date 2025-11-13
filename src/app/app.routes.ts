import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ColorComponent } from './components/color/color.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'colors',
    component: ColorComponent,
    title: 'Colors',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
