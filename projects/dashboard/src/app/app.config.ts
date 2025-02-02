import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { dashBoardRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(dashBoardRoutes),
    provideHttpClient(), // Configura as rotas do login
  ],
};
