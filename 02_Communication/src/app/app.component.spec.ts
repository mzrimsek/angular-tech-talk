import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectComponent } from './components/direct/direct.component';
import { IndirectComponent } from './components/indirect/indirect.component';

import { MessageService } from './services/message.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BindingComponent,
        DirectComponent,
        IndirectComponent
      ],
      imports: [FormsModule],
      providers: [MessageService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
