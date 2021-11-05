import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { UpdateMajor } from 'src/app/features/profile/interfaces/profile.interface';
import { ProfileService } from 'src/app/features/profile/services/profile.service';
import { Major } from 'src/app/features/register/interfaces/major.interface';
import { RegisterService } from 'src/app/features/register/services/register.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile!: UserProfile;
  majors!: Major[];
  selectedMajor!: Major;
  formData!: FormGroup;
  updateMajor!: UpdateMajor;

  constructor(
    private authService: AuthService,
    private registerService: RegisterService,
    private profileService: ProfileService,
    private router: Router,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userProfile = await this.authService.getProfile();
    this.updateMajor = await this.profileService.myprofile(this.userProfile.uuId);
    this.majors = await this.registerService.getMajor();
    this.selectedMajor = this.majors.filter( val => val.id === this.updateMajor.majorId)[0];
  }

  async save() {
    try {
      this.updateMajor = {
        uuId: this.userProfile.uuId,
        majorId: this.selectedMajor.id
      }
      await this.profileService.updateMajor(this.updateMajor);
      this.router.navigate(['/']);

    } catch (err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }

  }

}
