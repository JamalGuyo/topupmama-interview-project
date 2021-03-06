import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth/guards/auth.guard';

// components
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'core',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    loadChildren: () => import('../core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'core',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
