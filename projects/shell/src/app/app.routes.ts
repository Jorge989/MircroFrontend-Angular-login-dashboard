import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('login').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard', // Corrigi o nome do caminho (era "dashborad")
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
