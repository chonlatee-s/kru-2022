import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { ForumData } from 'src/app/features/forum/interfaces/forum-data.interface';
import { Forum } from 'src/app/features/forum/interfaces/forum.interface';
import { List } from 'src/app/features/forum/interfaces/list.interface';
import { ForumService } from 'src/app/features/forum/services/forum.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})

export class MajorComponent implements OnInit {
  display:boolean = false;
  userProfile!: UserProfile;
  forums!: Forum[];
  data!: ForumData;
  msg: string = "";
  first = 0;
  rows = 10;

  isLogin:boolean = false;
  items!: List[];
  activeItem: any; // เก็บค่าต่าง ๆ ที่อยู่ในแต่ละแถวของตาราง

  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private fnService: FnService,
    private confirmationService: ConfirmationService
  ) { }

  async ngOnInit(): Promise<void> {
    this.items = [
      { label: 'แก้ไข', icon: 'pi pi-pencil', command: () => {} },
      { label: 'ลบ', icon: 'pi pi-trash', command: () => { this.confirmDelete(); } }
    ];

    this.forums = await this.forumService.find({}).toPromise();
    this.userProfile = await this.authService.getProfile();

    const checckUserProfile = Object.getOwnPropertyNames(this.userProfile).length;
    if (checckUserProfile !== 0) this.isLogin = true;
    
  }

  async sendData() {
    this.data = {
      topic: this.msg,
      uuId: this.userProfile.uuId
    }

    if(this.msg !== '') {
      await this.forumService.create(this.data).toPromise();
      this.display = false;
      this.forums = await this.forumService.find({}).toPromise();
    }
    this.resetMsg();
  }

  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }

  resetMsg() {
    this.msg = "";
  }
  
  confirmDelete() {
    this.confirmationService.confirm({
      message: 'คุณต้องการจะลบข้อมูลนี้ ใช่หรือไม่',
      header: 'ลบข้อมูล',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        alert(this.activeItem.uuId);
      }
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.forums ? this.first === (this.forums.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.forums ? this.first === 0 : true;
  }

}
