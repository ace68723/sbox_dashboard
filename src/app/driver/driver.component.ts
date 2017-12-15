import { AppService } from '../app.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {
  title = 'app';
  searchName: any;
  driverID: any;
  boxes: any;
  options: any = [];
  selectedBoxes: any = [];
  constructor(
    public app: AppService, private router: Router
  ) {
  }

  public ngOnInit() {
    this.getTable();
    console.log('driver');

  }
  getTable() {
    this.app.getTable().subscribe(
      event => {
        console.log(event);
        this.boxes = event.ev_boxes;
        console.log(this.boxes);
        this.boxes.forEach(item => {
          this.options.push(item.obid);
        });
      }
    );
  }
  selectBox() {
    Object.keys(this.boxes).forEach(key => {
      if (this.boxes[key].obid == this.searchName) {
        this.selectedBoxes.push(this.boxes[key]);
        console.log(this.selectedBoxes);
      }
   });
   this.searchName = null;
   }
   goToDriverPage() {
    this.router.navigate(['/home']);
  }
  goToWeeklyPage() {
    this.router.navigate(['/count']);
  }
  goToCreditPage() {
    this.router.navigate(['/credit']);
  }
}
