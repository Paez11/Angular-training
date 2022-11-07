import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { NoteComponent } from "./note/note.component";

@NgModule({
    imports: [CommonModule,TranslateModule],
    declarations: [NoteComponent],
    exports: [NoteComponent]
})
export class SharedModule{

}