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
  listData: any = [];
  pageNumArray: any = [];
  page_size: number;
  i: any;
  total_page: number;
  dataloded: any = false;
  constructor(private _script: ScriptLoaderService, private appService: AppService,
    public route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.getSPUList();
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSPUList() {
    this.appService.getSPUList(this.page_num).subscribe(
      event => {
        this.listData = event.ea_spu_list;
        this.page_num = event.ev_page_number;
        this.total_page = event.ev_total_page;
        this.dataloded = true;
        console.log('1', this.listData);
      }
    );
    setTimeout(() => {
      this.getNumber();
    }, 2000);
  }

  goToPage(i) {
    this.page_num = i+1;
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
}
