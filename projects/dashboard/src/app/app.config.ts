import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { dashBoardRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(dashBoardRoutes), // Configura as rotas do login
  ],
};
