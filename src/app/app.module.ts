import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DriverComponent } from './driver/driver.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import {CreditComponent} from './credit/credit.component';
import {WeeklyComponent} from './weeklynumber/weekly.component';
import {ScriptLoaderService} from '../js/script-loader.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SBoxSpuListComponent } from './sbox-spu-list/sbox-spu-list.component';
import { SboxSkuListComponent } from './sbox-sku-list/sbox-sku-list.component';
import { SboxSkuEditComponent } from './sbox-sku-edit/sbox-sku-edit.component';
import { SboxSpuEditComponent } from './sbox-spu-edit/sbox-spu-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    HomeComponent,
    CreditComponent,
    WeeklyComponent,
    SBoxSpuListComponent,
    SboxSkuListComponent,
    SboxSkuEditComponent,
    SboxSpuEditComponent,
    SidebarComponent,
    HeaderComponent
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
