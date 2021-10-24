import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/features/auth/interfaces/user-profile';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { FnService } from 'src/app/features/fn/services/fn.service';
import { Forum } from 'src/app/features/forum/interfaces/forum.interface';
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
  
  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private fnService: FnService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {
    this.forum = await this.forumService.findById(this.route.snapshot.params.id).toPromise();
    this.userProfile = await this.authService.getProfile();
  }
  
  converseDate(D: string) {
    return this.fnService.converseDate(D);
  }

}
