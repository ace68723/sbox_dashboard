import { Component, OnChanges, SimpleChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sbox-sku-list',
  templateUrl: './sbox-sku-list.component.html',
  styleUrls: ['./sbox-sku-list.component.css']
})
export class SboxSkuListComponent implements OnInit {
  page_num: number;
  parent_spu: number = 0;
  listData: any = [];
  pageNumArray: any = [];
  page_size: number;
  i: any;
  total_page: number;
  dataloded: any = false;
  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) {

  }
  ngAfterViewInit() {}
  ngOnInit() {
   this.getSKUList();
   console.log(this.pageNumArray);
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSKUList() {
    this.appService.getSKUList(this.parent_spu, this.page_num).subscribe(
      event => {
        console.log('gg', event);
        this.listData = event.eo_spu.sku_list;
        this.page_num = event.eo_spu.sku_page_number;
        this.total_page = event.eo_spu.sku_total_page;
        this.dataloded = true;
        console.log(this.page_num);
      }
    );
    setTimeout(() => {
      this.getNumber();
    }, 2000);
    console.log(this.pageNumArray);
  }

  goToPage(i) {
    this.page_num = i+1;
    this.appService.getSKUList(this.parent_spu, i + 1).subscribe(
      event => {
        this.listData = event.eo_spu.sku_list;
      }
    );
  }

  goToEdit(item) {
    return;
    // this.router.navigate(['transaction']);
    // localStorage.setItem('account_id', item.account_id);
    // localStorage.setItem('merchantname', item.display_name);
    // localStorage.setItem('merchantID', item.merchant_id);
  }

}
