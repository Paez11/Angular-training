import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-head-table',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslateModule],
  template: `
    <div class="container1">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="c1">{{'TITLE' | translate}}</th>
            <th scope="col" class="c2">{{'DESCRIPTION' | translate}}</th>
            <th scope="col" class="c3">{{'REMOVE' | translate}}</th>
            <th scope="col" class="c4">{{'EDITB' | translate}}</th>
          </tr>
        </thead>
      </table>
    </div>
  `,styleUrls: ['./head-table.component.css']
})
export class HeadTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
