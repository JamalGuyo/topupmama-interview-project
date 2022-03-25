import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// created modules
import { AuthRoutingModule } from './auth-routing.module';

// components
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
