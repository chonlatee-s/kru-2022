import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-profile',
  templateUrl: './img-profile.component.html',
  styleUrls: ['./img-profile.component.scss']
})
export class ImgProfileComponent {
  display: boolean = false;
  position: string ='top-right'

  listMenu() {
    if(this.display) this.display = false
    else this.display = true
  }

}
