import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@modules/users/services/users.service';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: any[];
  userLoaded$: Observable<boolean> = of(false);

  //
  totalPages: number;
  currentPage: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<fromStore.UsersState>
  ) {}

  ngOnInit(): void {
    // dispatch actions
    this.store.dispatch(fromStore.loadUsers({ payload: 1 }));
    // select data load state
    this.userLoaded$ = this.store.select(fromStore.getLoaded);

    this.userService.getUsers(1).subscribe({
      next: (data) => {
        this.userLoaded$ = this.store.select(fromStore.getLoaded);
        this.users = data.data;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
      },
    });
  }

  loadUser(page: number) {
    this.store.dispatch(fromStore.loadUsers({ payload: page }));
    this.userLoaded$ = this.store.select(fromStore.getLoaded);
    this.userService.getUsers(page).subscribe({
      next: (data) => {
        this.userLoaded$ = this.store.select(fromStore.getLoaded);
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
