import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { loginRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(loginRoutes), // Configura as rotas do login
  ],
};
