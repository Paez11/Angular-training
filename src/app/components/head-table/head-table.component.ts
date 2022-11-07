import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-head-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container1">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col" class="c1">titulo</th>
            <th scope="col" class="c2">descripción</th>
            <th scope="col" class="c3">Eliminar</th>
            <th scope="col" class="c4">Editar</th>
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
