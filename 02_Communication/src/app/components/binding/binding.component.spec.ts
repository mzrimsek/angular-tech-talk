import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BindingComponent } from './binding.component';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BindingComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('When one way input changes', () => {
    const newMessage = 'Something new';

    it('Should call setOneWay', async(() => {
      spyOn(component, 'setOneWay');
      const oneWayInput = fixture.nativeElement.querySelector('.no-binding input');
      oneWayInput.value = newMessage;
      oneWayInput.dispatchEvent(new Event('change'));
      expect(component.setOneWay).toHaveBeenCalled();
    }));

    it('Should set oneWayMessage', async(() => {
      const oneWayInput = fixture.nativeElement.querySelector('.no-binding input');
      oneWayInput.value = newMessage;
      oneWayInput.dispatchEvent(new Event('change'));
      expect(component.oneWayMessage).toBe(newMessage);
    }));
  });
});
