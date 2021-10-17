import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { Profile } from 'src/app/features/auth/interfaces/profile.interface';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Major } from 'src/app/features/register/interfaces/major.interface';
import { RegisterService } from 'src/app/features/register/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  socialUser!: SocialUser;
  profile!: Profile;
  step1: boolean = true;
  step2: boolean = false;
  majors!: Major[];
  selectedMajor!: Major;

  constructor(
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.majors = await this.registerService.getMajor();
  }

  async signInWithGoogle() {
    const user = await this.authService.signInWithGoogle();
    if(user) {
      this.socialUser = user;
      this.step1 = false;
      this.step2 = true;
    }
  }

  register(option: string) {
    this.profile = {
      email: this.socialUser.email,
      fullname: this.socialUser.name,
      generateId: this.socialUser.id,
      profile: this.socialUser.photoUrl,
      provider: this.socialUser.provider,
      majorId: option === 'skip' ? 0 : this.selectedMajor.id
    }
    console.log(this.profile)
    this.authService.register(this.profile);
  }
}
