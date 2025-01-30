import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../../../login/src/public-api').then((m) => m.LoginComponent), // Carrega o componente do login
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../../../dashboard/src/public-api').then(
        (m) => m.DashBoardComponent
      ), // Carrega o componente do dashboard
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/404', // Ou defina uma página de "404 Not Found"
  },
];
