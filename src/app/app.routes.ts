import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SboxSpuListComponent} from './sbox-spu-list/sbox-spu-list.component';
import {SboxSkuListComponent} from './sbox-sku-list/sbox-sku-list.component';

import {SboxSpuEditComponent} from './sbox-spu-edit/sbox-spu-edit.component';
import {SboxSkuEditComponent} from './sbox-sku-edit/sbox-sku-edit.component';

export const appRoutes = [
  { path: 'spu-list',  component: SboxSpuListComponent},
  { path: 'sku-list',  component: SboxSkuListComponent},
  { path: 'spu-edit',  component: SboxSpuEditComponent},
  { path: 'sku-edit',  component: SboxSkuEditComponent},
  { path: '**', redirectTo: '/spu-list'},
];
