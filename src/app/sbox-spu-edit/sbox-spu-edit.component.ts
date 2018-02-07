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
  dataLoded: any = true;

  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) {
      this.status_mapping = this.appService.getStatusMapping();
  }

  ngOnInit() {
    this.SPUId = parseInt(localStorage.getItem('spu_id'));
    this.getSPUInfo();
  }

  toggleLoading(){
    this.dataLoded = !this.dataLoded;
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSPUInfo(){
    this.toggleLoading();
    this.appService.getSPUInfo(this.SPUId, this.page_num).subscribe(
      event => {
        this.SPUData = event.eo_spu;
        this.SKUList = event.eo_spu.sku_list;
        this.toggleLoading();
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
    this.toggleLoading();
    this.appService.setSKUStatus(item.sku_id, item.sku_status).subscribe(
      event => {
        this.toggleLoading();
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
    this.toggleLoading();
    this.appService.updateSPUData(body).subscribe(
      event => {
        this.toggleLoading();
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
