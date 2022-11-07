import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { INote } from './model/INote';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notea';

  constructor(log:LoginService) {
    log.autoLogin();
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
}
