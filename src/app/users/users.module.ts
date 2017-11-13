import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { UsersRoutingModule } from './users.routing';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsersRoutingModule],
  declarations: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule { }
