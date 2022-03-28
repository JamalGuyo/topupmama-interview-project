import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

import { ConfirmedValidator } from '@shared/utils/password-compare';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  fieldTextType: boolean;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initRegisterForm();
  }

  private initRegisterForm() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^((?=.*?[a-z])(?=.*?[0-9]))(?=.*?[#?!@$%^&*-]).{8,}$'
            ),
          ],
        ],
        password2: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('password', 'password2'),
      }
    );
  }

  registerUser() {
    if (this.registerForm.invalid) return;
    const { email, password } = this.registerForm.value;
    this.authService.register({ email, password }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.toastr.success('🎉 Account created successfully! 🎉');
        this.router.navigate(['/auth/login']);
        this.registerForm.reset();
      },
      error: (error) => {
        return this.toastr.error(error.error.error);
      },
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
