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
   this.getSKUList();
   console.log(this.pageNumArray);
  }

  getNumber() {
    return this.pageNumArray = new Array(this.total_page);
  }

  getSKUList() {
    this.appService.getSKUList(0, this.page_num).subscribe(
      event => {
        this.listData = event.ev_data.recs;
        this.page_num = event.ev_data.page_num;
        this.total_page = event.ev_data.total_page;
        this.dataloded = true;
        console.log(this.page_num);
      }
    );
    setTimeout(() => {
      this.getNumber();
    }, 2000);
    console.log(this.pageNumArray);
  }

  // goToPage(i) {
  //   this.page_num = i+1;
  //   this.appService.getSKUList(i + 1).subscribe(
  //     event => {
  //       this.companyInfo = event.ev_data.recs;

  //     }
  //   );
  // }

  // goToEdit(item) {
  //   return;
  //   this.router.navigate(['transaction']);
  //   localStorage.setItem('account_id', item.account_id);
  //   localStorage.setItem('merchantname', item.display_name);
  //   localStorage.setItem('merchantID', item.merchant_id);
  // }

}
