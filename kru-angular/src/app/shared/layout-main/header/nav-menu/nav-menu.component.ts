import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent {
  display: boolean = false;
  position: string ='top-right'

  listMenu() {
    if(this.display) this.display = false
    else this.display = true
  }
}
