import { AppService } from '../app.service';
import {
  Component,
  OnInit, ViewChild, ElementRef
} from '@angular/core';
import { ScriptLoaderService } from '../../js/script-loader.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'weekly',
  templateUrl: './weekly.component.html',
})
export class WeeklyComponent implements OnInit, AfterViewInit {
  @ViewChild('ip') ip: ElementRef;
  @ViewChild('ipp') ipp: ElementRef;

  num_cards: any;
  prod_counts: any;
  sortBy: any;
  sorted: any = false;
  visibleProdCounts: any;
  time: any = [
  ];
  constructor(
    public app: AppService, private _script: ScriptLoaderService
  ) {
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this._script.load('weekly',
        'assets/bootstrap-datepicker.js');
  }
  getWeeklyCount() {
    console.log(this.ip.nativeElement.value);
    console.log(this.ipp.nativeElement.value);
    this.time.iv_start = this.ip.nativeElement.value;
    this.time.iv_end = this.ipp.nativeElement.value;
    this.app.getWeeklyCount(this.time).subscribe(
      event => {
        alert('获取成功');
        console.log(event);
        this.prod_counts = event.ea_prod_count;
        console.log(this.prod_counts);
      },
      event => {
        alert('获取失败');
      }
    );
    setTimeout(() => {
      this.visibleProdCounts =  this.prod_counts.slice(0);
      this.resortBy();
    }, 5000);
  }
  resortBy() {
      this.visibleProdCounts.sort(sortByNameAsc);
    }
}
function sortByNameAsc(s1: any, s2: any) {
  if (s1.count > s2.count) {
      return -1;
  }else if (s1.count === s2.count) {
    return 0;
  } else {return 1;
  }
}