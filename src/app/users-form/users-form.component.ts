import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { User } from '../users/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm!: FormGroup;
  newUser$!: Observable<User>

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService) { }



  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      prenom: [null],
      nom: [null],
      email: [null],
      telephone: [null],
      date_naissance: [null]
    })
  }

  onSubmitForm() {
    console.log(this.userForm.value);
    this.userService.addUsers(this.userForm.value).subscribe();
  }
}

