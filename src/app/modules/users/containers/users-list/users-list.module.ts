import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, RouterModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
