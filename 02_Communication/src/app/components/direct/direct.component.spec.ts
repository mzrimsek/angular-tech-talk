import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectComponent } from './direct.component';

describe('DirectComponent', () => {
  let component: DirectComponent;
  let fixture: ComponentFixture<DirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('When incrementCount is called', () => {
    it('Should increment count', () => {
      component.incrementCount();
      expect(component.count).toBe(1);
    });

    it('Should emit countChanged', () => {
      spyOn(component.countChanged, 'emit');
      component.incrementCount();
      expect(component.countChanged.emit).toHaveBeenCalledWith({
        count: 1
      });
    });
  });

  it('Should emit buttonClicked when emitButtonClicked is called', () => {
    spyOn(component.buttonClicked, 'emit');
    component.emitButtonClicked();
    expect(component.buttonClicked.emit).toHaveBeenCalled();
  });
});
