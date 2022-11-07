import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/theme';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,MatToolbarModule,MatSlideToggleModule,FormsModule,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkTheme: boolean;
  langs: string[];

  constructor(public loginS:LoginService,private theme: ThemeService,private translate: TranslateService) {
    this.theme.initTheme();
    this.isDarkTheme = this.theme.isDarkMode();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('english');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.addLangs(['english','spanish']);
    this.langs = translate.getLangs();
   }

  ngOnInit(): void {
    console.log("navbar init");
  }

  public logout(){
    this.loginS.signOut();
  }

  public toggleTheme(){
    this.isDarkTheme = this.theme.isDarkMode();
    this.isDarkTheme? this.theme.update('light-theme'): this.theme.update('dark-theme');
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }

}
