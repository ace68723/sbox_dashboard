import { Component, OnChanges, SimpleChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sbox-spu-edit',
  templateUrl: './sbox-spu-edit.component.html',
  styleUrls: ['./sbox-spu-edit.component.css']
})

export class SboxSpuEditComponent implements OnInit {
  page_num: number;
  SPUId: number;
  SPUData: any = {};
  SKUList: any = [];
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
    this.SPUId = parseInt(localStorage.getItem('spu_id'));
    this.getSPUInfo();
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSPUInfo(){
    this.appService.getSPUInfo(this.SPUId, this.page_num).subscribe(
      event => {
        this.SPUData = event.eo_spu;
        this.SKUList = event.eo_spu.sku_list;
        this.dataLoded = true;
      },
    );
  }

  goToPage(i) {
    this.page_num = i+1;
    this.appService.getSPUList(i + 1).subscribe(
      event => {
        this.SKUList = event.ea_spu_list;
      }
    );
  }
  goToEdit(item) {
    this.router.navigate(['sku-edit']);
    localStorage.setItem('sku_data', JSON.stringify(item));
  }
  goBack(){
    window.history.back();
  }

  setSKUStatus(item){
    this.appService.setSKUStatus(item.sku_id, item.sku_status).subscribe(
      event => {
        if (!event || event.ev_error != 0){
          alert('更新失败');
        }
      }
    );
  }

  updateSPUData(){
    const body = {
      'spu_id':this.SPUData.spu_id,
      'spu_name': this.SPUData.spu_name,
      // 'spu_price': this.SPUData.spu_price,
      // 'spu_image': this.SPUData.spu_image,
      'spu_status': this.SPUData.spu_status,
    };
    this.appService.updateSPUData(body).subscribe(
      event => {
        if (!event || event.ev_error != 0){
          alert('更新失败');
        }
        else{
          alert('更新成功');
        }
      }
    );
  }
}
