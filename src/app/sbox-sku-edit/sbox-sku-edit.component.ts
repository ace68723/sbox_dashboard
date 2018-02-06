import { Component, OnChanges, SimpleChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-sbox-sku-edit',
  templateUrl: './sbox-sku-edit.component.html',
  styleUrls: ['./sbox-sku-edit.component.css']
})
export class SboxSkuEditComponent implements OnInit {
  page_num: number;
  SKUData: any = {};
  pageNumArray: any = [];
  page_size: number;
  i: any;
  total_page: number;
  dataLoded: any = false;

  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.SKUData = JSON.parse(localStorage.getItem('sku_data'));
    console.log('gg', this.SKUData);
    this.dataLoded = true;
  }

  goBack(){
    window.history.back();
  }
}
