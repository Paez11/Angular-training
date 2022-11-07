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
  langs: string[];

  constructor(log:LoginService, private translate: TranslateService) {
    log.autoLogin();
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.addLangs(['es','en']);
    this.langs = translate.getLangs();
    translate.setTranslation('en', {
      IDIOMA: 'language'
    })
    /*
    this.translate.get('IDIOMA',{value: 'language'}).subscribe((res:string) =>{
      console.log(res);
    });
    */
  }

  changeLang(lang: string){
    this.translate.use(lang);
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
