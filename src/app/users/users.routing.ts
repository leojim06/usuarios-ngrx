import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UserIndexComponent, data: { title: 'Usuarios' } },
      { path: 'new', component: UserNewComponent, data: { title: 'Nuevo Usuario' } },
      { path: ':id', component: UserDetailComponent, data: { title: 'Información del Usuario' } },
      { path: ':id/edit', component: UserEditComponent, data: { title: 'Editar Usuario' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
