import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    isExpanded = false;

    collapse() {
      this.isExpanded = false;
    }
  
    toggle() {
      this.isExpanded = !this.isExpanded;
    }

}
