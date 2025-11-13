import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'devices',
    component: DevicesComponent,
    title: 'Devices',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
