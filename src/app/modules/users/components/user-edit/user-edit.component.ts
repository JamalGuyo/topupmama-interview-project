import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '@modules/users/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  editForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => (this.id = +param.get('id')));

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  updateUser() {
    if (this.editForm.invalid) return;
    this.userService.updateUser(this.id, this.editForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('User updated');
        this.router.navigate(['/core/users']);
      },
      error: (err) => this.toastr.error(err.error.error),
    });
  }
}
