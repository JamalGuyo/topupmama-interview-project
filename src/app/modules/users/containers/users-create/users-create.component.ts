import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '@modules/users/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss'],
})
export class UsersCreateComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  createUser() {
    if (this.userForm.invalid) return;
    this.userService.createUser(this.userForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('User has been created');
        this.router.navigate(['/core/users']);
      },
      error: (err) => this.toastr.error(err.error.error),
    });
  }
}
