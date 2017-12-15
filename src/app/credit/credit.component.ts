import { AppService } from '../app.service';
import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'credit',
  template: `<h1>当前绑定信用卡数为
   {{this.num_cards}}
   </h1>`
})
export class CreditComponent implements OnInit {
  num_cards: any;
  selectedBoxes: any = [];
  constructor(
    public app: AppService
  ) {
  }

  public ngOnInit() {
    this.getCredit();
    console.log('1234');
  }
  getCredit() {
    this.app.getCredit().subscribe(
      event => {
        console.log(event);
        this.num_cards = event.ev_num_cards;
        console.log(this.num_cards);
      }
    );
    console.log('123');
  }

}
