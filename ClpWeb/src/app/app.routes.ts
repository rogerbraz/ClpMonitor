import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WaterPressureComponent } from './dashboard/water-pressure/water-pressure.component';
import { WaterTemperatureComponent } from './dashboard/water-temperature/water-temperature.component';
import { EnginePressureComponent } from './dashboard/engine-pressure/engine-pressure.component';
import { EngineTemperatureComponent } from './dashboard/engine-temperature/engine-temperature.component';
import { OilLevelComponent } from './dashboard/oil-level/oil-level.component';
import { LubricatingFilterComponent } from './dashboard/lubricating-filter/lubricating-filter.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'engine-pressure', component: EnginePressureComponent },
  { path: 'engine-temperature', component: EngineTemperatureComponent },
  { path: 'water-pressure', component: WaterPressureComponent },
  { path: 'water-temperature', component: WaterTemperatureComponent },
  { path: 'oil-level', component: OilLevelComponent },
  { path: 'lubrificating-filter', component: LubricatingFilterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
