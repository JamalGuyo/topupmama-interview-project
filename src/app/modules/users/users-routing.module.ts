import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersCreateComponent } from './containers/users-create/users-create.component';
import { UsersListComponent } from './containers/users-list/users-list.component';

// components

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  },
  {
    path: 'new',
    component: UsersCreateComponent,
  },
  {
    path: ':id',
    component: UserDetailComponent,
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
