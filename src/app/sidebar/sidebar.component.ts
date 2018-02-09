import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
  div > a.active {color: #ffc3e1 };
  div > span.active {color: #ffc3e1 }
  div > a {color: #2f3038 };
  div > span {color: #2f3038 }
  `]
})

export class SidebarComponent {
  title = 'app-sidebar';
  constructor(private appService: AppService, public route: ActivatedRoute, private router: Router) {

  }
}
