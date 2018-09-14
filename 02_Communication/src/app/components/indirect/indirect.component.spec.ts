import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirectComponent } from './indirect.component';

import { MessageService } from '../../services/message.service';

describe('IndirectComponent', () => {
  let component: IndirectComponent;
  let fixture: ComponentFixture<IndirectComponent>;
  let service: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndirectComponent],
      providers: [MessageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndirectComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MessageService);

    spyOn(service, 'setMessage');
    spyOn(component.messageChanged, 'emit');

    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('When button is clicked', () => {
    const message = 'Something great';
    let input: any;

    beforeEach(() => {
      input = fixture.nativeElement.querySelector('input');
      input.value = message;
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges();
    });

    it('Should reset the input value', () => {
      expect(input.value).toBe('');
    });

    it('Should call messageService setMessage', () => {
      expect(service.setMessage).toHaveBeenCalledWith(message);
    });

    it('Should emit messageChanged', () => {
      expect(component.messageChanged.emit).toHaveBeenCalled();
    });
  });
});
