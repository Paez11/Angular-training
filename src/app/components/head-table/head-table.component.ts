import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-head-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">titulo</th>
          <th scope="col" class="des">descripción</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
    </table>
  `,styleUrls: ['./head-table.component.css']
})
export class HeadTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
