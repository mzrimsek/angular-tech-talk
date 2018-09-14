import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LockedComponent } from './components/locked/locked.component';
import { NavComponent } from './components/nav/nav.component';
import { UnlockedComponent } from './components/unlocked/unlocked.component';

import { LockService } from './services/lock.service';

import { LockGuard } from './guards/lock.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UnlockedComponent,
    LockedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LockService, LockGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
