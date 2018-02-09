import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {DriverComponent} from './driver/driver.component';
import {HomeComponent} from './home/home.component';
import {WeeklyComponent} from './weeklynumber/weekly.component';
import {CreditComponent} from './credit/credit.component';
import { SBoxSpuListComponent } from './sbox-spu-list/sbox-spu-list.component';
import { SboxSkuListComponent } from './sbox-sku-list/sbox-sku-list.component';
export const appRoutes = [
  { path: 'home',  component: HomeComponent},
  { path: 'driver', component: DriverComponent},
  { path: 'count', component: WeeklyComponent},
  { path: 'credit', component: CreditComponent},
  { path: 'spulist', component: SBoxSpuListComponent},
  { path: 'skulist', component: SboxSkuListComponent},
  { path: '**', redirectTo: '/home'},

];
