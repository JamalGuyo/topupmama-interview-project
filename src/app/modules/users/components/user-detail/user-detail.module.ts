import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpinnerModule } from '@shared/components/spinner/spinner.module';

import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, RouterModule, SpinnerModule],
  exports: [UserDetailComponent],
})
export class UserDetailModule {}
