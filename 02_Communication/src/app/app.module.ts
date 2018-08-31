import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectComponent } from './components/direct/direct.component';
import { IndirectComponent } from './components/indirect/indirect.component';

import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    DirectComponent,
    BindingComponent,
    IndirectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
