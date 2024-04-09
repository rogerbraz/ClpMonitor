import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WaterPressureComponent } from './dashboard/water-pressure/water-pressure.component';
import { WaterTemperatureComponent } from './dashboard/water-temperature/water-temperature.component';
import { EnginePressureComponent } from './dashboard/engine-pressure/engine-pressure.component';
import { EngineTemperatureComponent } from './dashboard/engine-temperature/engine-temperature.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'engine-pressure', component: EnginePressureComponent },
  { path: 'engine-temperature', component: EngineTemperatureComponent },
  { path: 'water-pressure', component: WaterPressureComponent },
  { path: 'water-temperature', component: WaterTemperatureComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
