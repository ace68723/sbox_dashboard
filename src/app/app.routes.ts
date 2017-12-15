import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {DriverComponent} from './driver/driver.component';
import {HomeComponent} from './home/home.component';
import {WeeklyComponent} from './weeklynumber/weekly.component';
import {CreditComponent} from './credit/credit.component';
export const appRoutes = [
  { path: 'home',  component: HomeComponent},
  { path: 'driver', component: DriverComponent},
  { path: 'count', component: WeeklyComponent},
  { path: 'credit', component: CreditComponent},
  { path: '**', redirectTo: '/home'},
];
