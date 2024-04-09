import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WaterPressureComponent } from './dashboard/water-pressure/water-pressure.component';
import { WaterTemperatureComponent } from './dashboard/water-temperature/water-temperature.component';
import { EnginePressureComponent } from './dashboard/engine-pressure/engine-pressure.component';
import { EngineTemperatureComponent } from './dashboard/engine-temperature/engine-temperature.component';
import { OilLevelComponent } from './dashboard/oil-level/oil-level.component';
import { LubrificatingFilterComponent } from './dashboard/lubrificating-filter/lubrificating-filter.component';
import { WaterPressureLtComponent } from './dashboard/water-pressure-lt/water-pressure-lt.component';
import { PressureRevComponent } from './dashboard/pressure-rev/pressure-rev.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'engine-pressure', component: EnginePressureComponent },
  { path: 'water-pressure', component: WaterPressureComponent },
  { path: 'water-pressure-lt', component: WaterPressureLtComponent },
  { path: 'pressure-rev', component: PressureRevComponent },
  { path: 'engine-temperature', component: EngineTemperatureComponent },
  { path: 'water-temperature', component: WaterTemperatureComponent },
  { path: 'oil-level', component: OilLevelComponent },
  { path: 'lubrificating-filter', component: LubrificatingFilterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
