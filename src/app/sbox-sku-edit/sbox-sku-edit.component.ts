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
  status_mapping: any = [];
  total_page: number;
  dataLoded: any = false;

  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) {
      this.status_mapping = [
        {'id': 0, 'name': 'ok'},
        {'id': 1, 'name': 'sold out'},
        {'id': 9, 'name': '下线'},
      ]
  }

  ngOnInit() {
    this.SKUData = JSON.parse(localStorage.getItem('sku_data'));
    console.log('gg', this.SKUData);
    this.dataLoded = true;
  }

  goBack(){
    window.history.back();
  }
  updateSKUData(){
    const body = {
      'sku_id':this.SKUData.sku_id,
      'sku_name': this.SKUData.sku_name,
      // 'sku_image': this.SKUData.sku_image,
      // 'sku_fact_image': this.SKUData.sku_fact_image,
      'sku_status': this.SKUData.sku_status,
      'sku_alias': this.SKUData.sku_alias,
      'sku_original_price': this.SKUData.sku_original_price,
      'sku_price': this.SKUData.sku_price,
      'sku_amount': parseInt(this.SKUData.sku_amount),
      'sku_threshold': parseInt(this.SKUData.sku_threshold),
      // 'sku_amount': this.SKUData.sku_amount,
    };
    this.appService.updateSKUData(body).subscribe(
      event => {
        console.log(event);
        if (!event || event.ev_error != 0){
          alert('更新失败');
        }
        else{
          this.goBack();
        }
      }
    );
  }
}
