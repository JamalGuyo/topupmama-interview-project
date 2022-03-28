import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule } from '@angular/router';

import { SpinnerModule } from '@shared/components/spinner/spinner.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, RouterModule, SpinnerModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
