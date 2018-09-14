import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { UnlockedComponent } from './components/unlocked/unlocked.component';
import { LockedComponent } from './components/locked/locked.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
