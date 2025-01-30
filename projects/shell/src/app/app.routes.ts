import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('login').then((m) => m.LoginComponent), // Carrega o componente do login
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];
