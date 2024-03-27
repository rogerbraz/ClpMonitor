import { ApplicationConfig } from '@angular/core';
import { provideRouter,Routes } from '@angular/router';


const routes: Routes = [
  // Defina suas rotas aqui
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
