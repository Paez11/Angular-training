import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checked=false;
  user!: SocialUser;
  loggedIn!: boolean;
  originalPath!:string;
  private dbPath = '/users';
  notesRef!: AngularFirestoreCollection<any>;

  constructor(private authService: SocialAuthService,
  private router:Router, private db: AngularFirestore) {
    if(this.autoLogin()!=null){
      this.user = this.autoLogin();
    }else{
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        if(this.loggedIn){
          localStorage.setItem('currentUser', JSON.stringify({user:this.user}));
          if(this.originalPath){
            this.router.navigate([this.originalPath]);
            this.originalPath='';
          }else{
            this.router.navigate(['']);
          }
        }else{
          //localStorage.setItem('currentUser', "[]");
          this.router.navigate(['/login']);
        }
    });
    }
  }
  isAuth():boolean{
    return this.loggedIn;
  }
  async refreshToken(): Promise<void> {
    return this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  /*
  async signInWithGoogle():Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }*/

  autoLogin(){
    let userData = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : null;
    if(!userData){
      this.user = userData;
    }
    return  this.user;
  }

  async signOut(): Promise<void> {
    localStorage.clear();
    return await this.authService.signOut();
  }

}