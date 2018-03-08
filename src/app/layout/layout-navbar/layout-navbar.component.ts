import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector:    'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls:   [ './layout-navbar.component.scss' ]
})
export class LayoutNavbarComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = environment.system.name;
  }

}
