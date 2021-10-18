import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-img-profile',
  templateUrl: './img-profile.component.html',
  styleUrls: ['./img-profile.component.scss']
})
export class ImgProfileComponent {
  display: boolean = false;
  position: string ='top-right';
  userProfile!: UserProfile;
  
  constructor(
    private authService: AuthService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.authService.getProfile();
  }

  listMenu() {
    if(this.display) this.display = false;
    else this.display = true;
  }

  logout() {
    this.display = false;
    this.authService.logout();
  }

}
