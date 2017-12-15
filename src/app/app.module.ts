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
@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    HomeComponent,
    CreditComponent,
    WeeklyComponent,
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
