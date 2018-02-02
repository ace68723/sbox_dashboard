import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {SBoxSpuListComponent} from './sbox-spu-list/sbox-spu-list.component';

export const appRoutes = [
  { path: 'spu-list',  component: SBoxSpuListComponent},
  { path: '**', redirectTo: '/spu-list'},
];
