import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LockedComponent } from './components/locked/locked.component';
import { UnlockedComponent } from './components/unlocked/unlocked.component';

import { LockGuard } from './guards/lock.guard';

const routes: Routes = [
  {
    path: 'unlocked',
    component: UnlockedComponent
  },
  {
    path: 'locked',
    component: LockedComponent,
    canActivate: [LockGuard]
  },
  {
    path: '**',
    redirectTo: 'unlocked'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
