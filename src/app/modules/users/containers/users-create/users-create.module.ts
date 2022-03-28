import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './users-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersCreateComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UsersCreateComponent],
})
export class UsersCreateModule {}
