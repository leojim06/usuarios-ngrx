import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h2>Modulo Usuarios</h2>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
