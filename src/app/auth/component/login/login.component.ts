import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '@shared/utils/password-compare';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  fieldTextType: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
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
    });
  }

  loginUser() {
    if (this.loginForm.invalid) return;
    // TODO:
    // send data to backend to register and navigate to main page
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
