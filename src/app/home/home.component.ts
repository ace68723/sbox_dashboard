import { AppService } from '../app.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  boxes: any;
  constructor(
    public app: AppService, private router: Router
  ) {
  }

  public ngOnInit() {
    this.getTable();
  }
  getTable() {
    this.app.getTable().subscribe(
      event => {
        console.log(event);
        this.boxes = event.ev_boxes;
        console.log(this.boxes);
      }
    );
}
goToDriverPage() {
  this.router.navigate(['/driver']);
}
goToWeeklyPage() {
  this.router.navigate(['/count']);
}
goToCreditPage() {
  this.router.navigate(['/credit']);
}
}