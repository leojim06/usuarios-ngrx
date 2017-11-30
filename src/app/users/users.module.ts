import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { UsersRoutingModule } from './users.routing';
import { SharedModule } from '../core/modules/shared.module';

@NgModule({
  imports: [
    // CommonModule,
    // ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    UserIndexComponent,
    UserNewComponent,
    UserEditComponent],
  providers: [UsersService],
})
export class UsersModule { }
