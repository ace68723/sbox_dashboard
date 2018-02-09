import { Component, OnChanges, SimpleChanges, Input, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sbox-spu-list',
  templateUrl: './sbox-spu-list.component.html',
  styleUrls: ['./sbox-spu-list.component.css']
})

export class SboxSpuListComponent implements OnInit {
  page_num: number;
  selectedBoxes: any = [];
  companyInfo: any = [];
  listData: any = [];
  pageNumArray: any = [];
  page_size: number;
  i: any;
  total_page: number;
  status_mapping: any = [];
  dataLoded: any = true;
  constructor(private _script: ScriptLoaderService, private appService: AppService, public route: ActivatedRoute, private router: Router) {
      this.status_mapping = this.appService.getStatusMapping();
  }
  ngOnInit() {
    this.getSPUList();
  }

  toggleLoading() {
    this.dataLoded = !this.dataLoded;
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSPUList() {
    this.toggleLoading();
    this.appService.getSPUList(this.page_num).subscribe(
      event => {
        this.toggleLoading();
        this.listData = event.ea_spu_list;
        this.page_num = event.ev_page_num;
        this.total_page = event.ev_total_page;
        this.getNumber();
      }
    );
  }

  goToPage(i) {
    this.page_num = i + 1;
    this.appService.getSPUList(i + 1).subscribe(
      event => {
        this.listData = event.ea_spu_list;
      }
    );
  }

  goToEdit(item) {
    this.router.navigate(['spu-edit']);
    localStorage.setItem('spu_id', item.spu_id);
  }

  setSPUStatus(item) {
    this.toggleLoading();
    this.appService.setSPUStatus(item.spu_id, item.status).subscribe(
      event => {
        this.toggleLoading();
        if (!event || event.ev_error !== 0) {
          alert('更新失败');
        }
      }
    );
  }
}
