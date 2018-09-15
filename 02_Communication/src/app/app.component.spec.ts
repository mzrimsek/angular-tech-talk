import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectComponent } from './components/direct/direct.component';
import { IndirectComponent } from './components/indirect/indirect.component';

import { MessageService } from './services/message.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: MessageService;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(MessageService);

    spyOn(service, 'getMessage').and.callThrough();

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('Indirect emit messageChanged', () => {
    beforeEach(() => {
      const indirect = fixture.nativeElement.querySelector('app-indirect');
      indirect.dispatchEvent(new Event('messageChanged'));
    });

    it('Should call messageService getMessage', () => {
      expect(service.getMessage).toHaveBeenCalled();
    });

    it('Should set serviceMessage', () => {
      const message = service.getMessage();
      expect(component.serviceMessage).toBe(message);
    });
  });

  describe('Direct emit countChanged', () => {
    beforeEach(() => {
      const direct = fixture.nativeElement.querySelector('app-direct');
      direct.dispatchEvent(new Event('countChanged'), {
        count: 1
      });
      fixture.detectChanges();
    });

    it('Should set childCount', () => {
      console.log(component.childCount);
      expect(component.childCount).toBe(1);
    });
  });

  describe('Direct emit buttonClicked', () => {
    beforeEach(() => {
      const direct = fixture.nativeElement.querySelector('app-direct');
      direct.dispatchEvent(new Event('buttonClicked'));
    });

    it('Should set backgroundColor', () => {
      expect(component.backgroundColor).not.toBe('#ffffff');
    });
  });
});
