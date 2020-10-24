import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLoginSecurityComponent } from './profile-login-security.component';

describe('ProfileLoginSecurityComponent', () => {
  let component: ProfileLoginSecurityComponent;
  let fixture: ComponentFixture<ProfileLoginSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLoginSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLoginSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
