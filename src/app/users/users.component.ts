import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  usersList: User[] | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersList) => (this.usersList = usersList))
  }

}
