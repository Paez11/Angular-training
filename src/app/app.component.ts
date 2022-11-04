import { Component } from '@angular/core';
import { INote } from './model/INote';
import { LoginService } from './services/login.service';
import { ThemeService } from './theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holamundo';
  isDarkTheme: boolean | undefined;

  constructor(private theme: ThemeService, log:LoginService) {
    log.autoLogin();
    this.theme.initTheme();
    this.isDarkTheme = this.theme.isDarkMode();
  }

  public removingNote($event:INote){
    console.log("Elminando Nota");
    console.log($event);
  }
  public editingNote($event:INote){
    console.log("Editando Nota");
    console.log($event);
  }
  public alerta(){
    alert("Alerta Roja");
  }

  public toggleTheme(){
    this.isDarkTheme = this.theme.isDarkMode();
    this.isDarkTheme? this.theme.update('light-theme'): this.theme.update('dark-theme');
  }
}
