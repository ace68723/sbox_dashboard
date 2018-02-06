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
  total_page: number;
  dataLoded: any = false;

  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) { }

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
        console.log(this.SPUData);
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
    localStorage.setItem('sku_id', item.sku_id);
  }
}
