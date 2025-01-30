import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('projects/login/public-api').then((m) => m.loginConfig),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('projects/dashboard/public-api').then((m) => m.dashboardConfig),
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
