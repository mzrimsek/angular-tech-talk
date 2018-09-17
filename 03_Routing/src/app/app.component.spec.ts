import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { LockService } from './services/lock.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: LockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavComponent
      ],
      providers: [LockService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(LockService);

    spyOn(service, 'unlock').and.callThrough();

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('Should call lockService unlock when unlock button is clicked', () => {
    const button = fixture.nativeElement.querySelector('#unlock-button');
    button.click();
    expect(service.unlock).toHaveBeenCalled();
  });
});
