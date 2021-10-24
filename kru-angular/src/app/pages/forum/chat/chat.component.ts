import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Detail } from 'src/app/features/detail/interfaces/detail.interface';
import { DetailService } from 'src/app/features/detail/services/detail.service';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { ForumService } from 'src/app/features/forum/services/forum.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  display:boolean = false;
  userProfile!: UserProfile;
  forum!: any;
  msg: string = "";
  data!: Detail;

  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private detailService: DetailService,
    private fnService: FnService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
    this.userProfile = await this.authService.getProfile();
  }
  
  async sendData() {
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
  }

  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }

  resetMsg() {
    this.msg = "";
  }

}
