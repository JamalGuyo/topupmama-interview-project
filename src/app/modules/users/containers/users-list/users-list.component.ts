import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@modules/users/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: any[];
  userLoaded: boolean = false;

  //
  totalPages: number;
  currentPage: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers(1).subscribe({
      next: (data) => {
        this.userLoaded = true;
        this.users = data.data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }

  loadUser(page: number) {
    this.userLoaded = false;
    this.userService.getUsers(page).subscribe({
      next: (data) => {
        this.userLoaded = true;
        this.users = data.data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/core/users']);
        this.toastr.success('User deleted successfully');
      },
      (error) => this.toastr.error(error.error.error)
    );
  }
}
