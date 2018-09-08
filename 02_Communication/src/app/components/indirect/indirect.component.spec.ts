import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectComponent } from './indirect.component';

import { MessageService } from '../../services/message.service';

describe('IndirectComponent', () => {
  let component: IndirectComponent;
  let fixture: ComponentFixture<IndirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndirectComponent],
      providers: [MessageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('When button is clicked', () => {
    const message = 'Something great';

    beforeEach(() => {
      const input = fixture.nativeElement.querySelector('input');
      input.value = message;
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges();
    });

    it('Should call messageService setMessage', () => {
      const service = TestBed.get(MessageService);
      spyOn(service, 'setMessage');
      expect(service.setMessage).toHaveBeenCalledWith(message);
    });

    it('Should emit messageChanged', () => {
      spyOn(component.messageChanged, 'emit');
      expect(component.messageChanged.emit).toHaveBeenCalled();
    });
  });
});
