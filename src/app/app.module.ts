import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NewComponent } from './pages/new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { NotesService } from './services/notes.service';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { HeadTableComponent } from './components/head-table/head-table.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    HeadTableComponent,
    ButtonComponent,
    NotesComponent,
    NewComponent,
    HttpClientModule,
    MatToolbarModule,
    MatSlideToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule // for firestore
  ],
  providers: [NotesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
            '781976054609-m18ac90tffqa0ikqokvpa5ddh74pf2og.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
