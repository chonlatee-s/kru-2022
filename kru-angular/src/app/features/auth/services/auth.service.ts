import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { BaseService } from 'src/app/core/services/base.service';
import { Profile } from '../interfaces/profile.interface';
import { UserProfile } from '../interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<unknown, unknown>{
  public userProfile!: UserProfile;
  isLoggedin: boolean = false;
  
  constructor(
    protected http: HttpClient,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) { super(http, '/auth') }

 
  async signInWithGoogle() {
    const user = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    return this.checkUser(user);
  }


  async checkUser(user: SocialUser) {
    const data = await this.http.get<any>(`${this.endpoint}/check/${user.email}`).toPromise();

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


  async login(dataLogin: any) {
    const data = await this.http.post<any>(`${this.endpoint}/login`, { email: dataLogin.email, password: dataLogin.id }).toPromise();
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
      this.logout();
      this.signOut();
    }
    return this.userProfile;
  }

  logout() {
    this.userProfile = {} as UserProfile;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
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
