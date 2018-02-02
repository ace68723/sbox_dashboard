import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SboxSpuListComponent} from './sbox-spu-list/sbox-spu-list.component';
import {SboxSkuListComponent} from './sbox-sku-list/sbox-sku-list.component';

export const appRoutes = [
  { path: 'spu-list',  component: SboxSpuListComponent},
  { path: 'sku-list',  component: SboxSkuListComponent},
  { path: '**', redirectTo: '/spu-list'},
];
