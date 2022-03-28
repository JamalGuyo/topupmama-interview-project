import { Component, OnInit } from '@angular/core';

import { UserService } from '@modules/users/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: any[];

  //
  totalPages: number;
  currentPage: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers(1).subscribe({
      next: (data) => {
        this.users = data.data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }

  loadUser(page: number) {
    this.userService.getUsers(page).subscribe({
      next: (data) => {
        this.users = data.data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }
}
