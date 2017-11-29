import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() onShow = new EventEmitter<User>();
  @Output() onEdit = new EventEmitter<User>();
  @Output() onDelete = new EventEmitter<User>();
  @Output() onNewUser = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showDetails(user: User) { this.onShow.emit(user); }

  editUser(user: User) { this.onEdit.emit(user); }

  deleteUser(user: User) { this.onDelete.emit(user); }

  createUser() { this.onNewUser.emit(true); }

}
