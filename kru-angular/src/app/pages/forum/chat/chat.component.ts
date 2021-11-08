import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { DetailEdit } from 'src/app/features/detail/interfaces/detail-edit.interface';
import { Detail } from 'src/app/features/detail/interfaces/detail.interface';
import { DetailService } from 'src/app/features/detail/services/detail.service';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { List } from 'src/app/features/forum/interfaces/list.interface';
import { ForumService } from 'src/app/features/forum/services/forum.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  display:boolean = false;
  displayEdit: boolean = false;

  userProfile!: UserProfile;
  forum!: any;

  msg: string = "";
  data!: Detail;

  dataEdit!: DetailEdit;
  msgEdit: string = "";

  isLogin:boolean = false;
  items!: List[];
  activeItem: any; // เก็บค่าต่าง ๆ ที่อยู่ในแต่ละแถวของตาราง

  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private detailService: DetailService,
    private fnService: FnService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
      this.userProfile = await this.authService.getProfile();
    } catch (err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }

    const checckUserProfile = Object.getOwnPropertyNames(this.userProfile).length;
    if (checckUserProfile !== 0) this.isLogin = true;

    this.items = [
      { label: 'แก้ไข', icon: 'pi pi-pencil', command: () => 
        { 
          this.displayEdit = true;
          this.msgEdit = this.activeItem.answer;
        }
      },
      { label: 'ลบ', icon: 'pi pi-trash', command: () => 
        { 
          this.confirmDelete(); 
        } 
      }
    ];

  }
  
  async sendData() {
    try {
      this.data = {
        answer: this.msg,
        forumuuId: this.route.snapshot.params.id,
        uuId: this.userProfile.uuId
      }

      if(this.msg !== '') {
        await this.detailService.create(this.data).toPromise();
        this.display = false;
        this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
      }
      this.resetMsg();
    } catch (err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }

  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }

  resetMsg() {
    this.msg = "";
    this.msgEdit = "";
  }

  async confirmDelete() {
    this.confirmationService.confirm({
      message: 'คุณต้องการจะลบข้อมูลนี้ ใช่หรือไม่',
      header: 'ลบข้อมูล',
      icon: 'pi pi-exclamation-circle',
      accept: () => {
        this.acceptDelete();
      }
    });
  }

  async acceptDelete() {
    try {
      await this.detailService.remove(this.activeItem.uuId).toPromise();
      this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
    } catch (err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }

  async sendDataEdit() {
    try {
      this.dataEdit = { answer: this.msgEdit };
      if(this.msgEdit !== '') {
        await this.detailService.update(this.activeItem.uuId, this.dataEdit).toPromise();
        this.displayEdit = false;
        this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
      }
      this.resetMsg();
    } catch (err) {
      this.messageService.add({severity:'error', summary:'พบข้อผิดพลาด', detail:'กรุณาลองใหม่อีกครั้ง'});
    }
  }

}
