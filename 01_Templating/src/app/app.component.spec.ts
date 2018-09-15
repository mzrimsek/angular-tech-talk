import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { PluralizePipe } from './pipes/pluralize.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PluralizePipe
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`Should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it('Should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const title = compiled.querySelector('h1').textContent;
    expect(title).toContain('Welcome to app!');
  }));

  it(`Should have companies with only 'RoviSys'`, async(() => {
    expect(component.companies).toEqual(['RoviSys']);
  }));

  it('Should return false when getHidden is called', async(() => {
    expect(component.getHidden()).toBe(false);
  }));

  it('Should invert hidden when toggleHidden is called', async(() => {
    const hidden = component.getHidden();
    component.toggleHidden();
    expect(component.getHidden()).toBe(!hidden);
  }));

  it('Should call toggleHidden when toggle button is clicked', async(() => {
    spyOn(component, 'toggleHidden');
    const compiled = fixture.debugElement.nativeElement;
    const toggleButton = compiled.querySelector('.hide-show button');
    toggleButton.click();
    expect(component.toggleHidden).toHaveBeenCalled();
  }));

  it('Should call updateTime when update button is clicked', async(() => {
    spyOn(component, 'updateTime');
    const compiled = fixture.debugElement.nativeElement;
    const updateButton = compiled.querySelector('.today button');
    updateButton.click();
    expect(component.updateTime).toHaveBeenCalled();
  }));
});
