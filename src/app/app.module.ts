import { DriverComponent } from './driver/driver.component';
import { CreditComponent } from './credit/credit.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import {ScriptLoaderService} from '../js/script-loader.service';

import { SboxSpuListComponent } from './sbox-spu-list/sbox-spu-list.component';
import { SboxSpuEditComponent } from './sbox-spu-edit/sbox-spu-edit.component';

import { SboxSkuListComponent } from './sbox-sku-list/sbox-sku-list.component';
import { SboxSkuEditComponent } from './sbox-sku-edit/sbox-sku-edit.component';
import { WeeklyComponent } from './weeklynumber/weekly.component';


@NgModule({
  declarations: [
    AppComponent,
    SboxSpuListComponent,
    SboxSkuListComponent,
    SboxSkuEditComponent,
    SboxSpuEditComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    CreditComponent,
    DriverComponent,
    WeeklyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService, ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
