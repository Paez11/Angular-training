import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/theme';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,MatToolbarModule,MatSlideToggleModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkTheme: boolean;

  constructor(public loginS:LoginService,private theme: ThemeService) {
    this.theme.initTheme();
    this.isDarkTheme = this.theme.isDarkMode();
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

}
