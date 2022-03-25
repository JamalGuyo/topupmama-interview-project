import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCreateComponent } from './users-create.component';

@NgModule({
  declarations: [UsersCreateComponent],
  imports: [CommonModule],
  exports: [UsersCreateComponent],
})
export class UsersCreateModule {}