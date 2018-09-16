import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have unlocked link with correct href', async(() => {
    const unlockedLink = fixture.debugElement.query(By.css('nav ul li:first-child a'));
    const href = unlockedLink.nativeElement.getAttribute('href');
    expect(href).toBe('/unlocked');
  }));

  it('Should have locked link with correct href', async(() => {
    const lockedLink = fixture.debugElement.query(By.css('nav ul li:last-child a'));
    const href = lockedLink.nativeElement.getAttribute('href');
    expect(href).toBe('/locked');
  }));
});
