import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { BaseService } from 'src/app/core/services/base.service';
import { Login } from '../interfaces/login.interface';
import { Profile } from '../interfaces/profile.interface';
import { UserProfile } from '../interfaces/user-profile';
@Injectable({
  providedIn: 'root'
})

export class AuthService extends BaseService<unknown, unknown>{
  public userProfile!: UserProfile;
  profile!: Profile;
  
  constructor(
    protected http: HttpClient,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) { super(http, '/auth') }

 
  async signInWithGoogle() {
    const user = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.profile  = {
      email: user.email,
      fullname: user.name,
      generateId: user.id,
      profile: user.photoUrl,
      provider: user.provider,
      majorId: 1,
    }
    
    return this.checkUser(this.profile);
  }

  async signInWithFacebook() {
    const user =  await this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.profile  = {
      email: user.email,
      fullname: user.name,
      generateId: user.id,
      profile: user.photoUrl,
      provider: user.provider,
      majorId: 1,
    }
    
    return this.checkUser(this.profile);
  }


  async checkUser(user: Profile) {
    const data = await this.http.get<boolean>(`${this.endpoint}/check/${user.email}`).toPromise();
    // เช็คว่ามีไหม ถ้ามี Login เลย ถ้าไม่มีส่งกลับไปหน้าบ้าน เพื่อเลือกสาขา แล้วกดกลับมาลงทะเบียน register อีกที
    if(data) {
      this.login(user);
      return null;
    }
    else return user;
  }


  async register(profile: Profile) {
    const data = await this.http.post<any>(`${this.endpoint}/register`, profile).toPromise();
    this.login(data);
  }

  async login(dataLogin: Login) {
    const data = await this.http.post<any>(`${this.endpoint}/login`, { email: dataLogin.email, password: dataLogin.generateId }).toPromise();
    if(data){

      localStorage.setItem('token', data.access_token);

      this.userProfile = await this.getProfile();
      this.router.navigate(['/']);

    }
    else this.router.navigate(['/register']);
  }

  async getProfile(): Promise<UserProfile> {
    try {
      this.userProfile = await this.http.get<UserProfile>(`${this.endpoint}/profile`).toPromise();
    } catch (error) {
      return this.userProfile = {} as UserProfile;
    }
    return this.userProfile;
  }

  logout() {
    this.userProfile = {} as UserProfile;
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.signOut();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }
}
