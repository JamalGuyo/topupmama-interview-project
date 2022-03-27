import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmedValidator } from '@shared/utils/password-compare';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  fieldTextType: boolean;

  constructor(private fb: FormBuilder) {}

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
    // TODO:
    // send data to backend to register and navigate to main page
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
