import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../store/models/users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() user: User = {
    id: undefined,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  @Output() onSubmit = new EventEmitter<User | null>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'id': [this.user.id],
      'name': [this.user.name, Validators.required],
      'username': [this.user.username, Validators.required],
      'email': [this.user.email, Validators.required],
      'address': this.fb.group({
        'street': [this.user.address.street],
        'suite': [this.user.address.suite],
        'city': [this.user.address.city],
        'zipcode': [this.user.address.zipcode],
        'geo': this.fb.group({
          'lat': [this.user.address.geo.lat],
          'lng': [this.user.address.geo.lng]
        }),
      }),
      'phone': [this.user.phone],
      'website': [this.user.website],
      'company': this.fb.group({
        'name': [this.user.company.name],
        'catchPhrase': [this.user.company.catchPhrase],
        'bs': [this.user.company.bs]
      })
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  cancelNewUser() {
    this.onSubmit.emit(null);
  }
}
