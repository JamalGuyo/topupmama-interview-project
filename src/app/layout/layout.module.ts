import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { LayoutRoutingModule } from './layout-routing.module';

// components
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, HeaderComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
