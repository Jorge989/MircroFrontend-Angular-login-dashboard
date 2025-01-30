import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from 'projects/login/public-api';
import { DashboardModule } from 'projects/dashboard/public-api';
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('login').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard').then((m) => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
