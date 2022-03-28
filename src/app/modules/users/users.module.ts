import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// created modules
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailModule } from './components/user-detail/user-detail.module';
import { UserEditModule } from './components/user-edit/user-edit.module';
import { UsersCreateModule } from './containers/users-create/users-create.module';
import { UsersListModule } from './containers/users-list/users-list.module';

// NGRX STORE
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserDetailModule,
    UserEditModule,
    UsersCreateModule,
    UsersListModule,
    StoreModule.forFeature('users', reducers),
  ],
})
export class UsersModule {}
