import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Profile } from 'src/app/features/auth/interfaces/profile.interface';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Major } from 'src/app/features/register/interfaces/major.interface';
import { RegisterService } from 'src/app/features/register/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  profile!: Profile;
  step1: boolean = false;
  step2: boolean = false;
  majors!: Major[];
  selectedMajor!: Major;
  alertMessage: boolean = false;

  userProfile!: UserProfile;

  constructor(
    private authService: AuthService,
    private registerService: RegisterService,
    private messageService: MessageService,
    private router: Router
  ) { }

  async ngOnInit() {
    try {
      this.userProfile = await this.authService.getProfile();
      const checckUserProfile = Object.getOwnPropertyNames(this.userProfile).length;
      if (checckUserProfile !== 0) this.router.navigate(['/home']);

      this.majors = await this.registerService.getMajor();
      this.step1 = true;
    } catch(err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }

  async signInWithGoogle() {
    const user = await this.authService.signInWithGoogle();
    if (user) {
      this.profile = user;
      this.step1 = false;
      this.step2 = true;
    }
  }

  async signInWithFacebook() {
    const user = await this.authService.signInWithFacebook();
    if (user) {
      this.profile = user;
      this.step1 = false;
      this.step2 = true;
    }
  }

  register(option: string) {
    try {
      if (option === 'skip') {
        this.profile.majorId = 1; // ไม่ระบุสาขา
        this.authService.register(this.profile);
      }
      else {
        if (this.selectedMajor === undefined) this.alertMessage = true;
        else {
          this.profile.majorId = this.selectedMajor.id;
          this.authService.register(this.profile);
        }
      }
    } catch(err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }

  }

  onChange() {
    if (this.selectedMajor === undefined) this.alertMessage = true;
    else this.alertMessage = false;
  }
}
