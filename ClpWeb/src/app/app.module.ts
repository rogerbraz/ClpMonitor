import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importe RouterModule
import { routes } from './app.routes'; // Importe as rotas do arquivo app.routes.ts
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Use as rotas importadas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
