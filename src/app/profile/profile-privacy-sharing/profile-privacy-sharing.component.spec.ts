import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePrivacySharingComponent } from './profile-privacy-sharing.component';

describe('ProfilePrivacySharingComponent', () => {
  let component: ProfilePrivacySharingComponent;
  let fixture: ComponentFixture<ProfilePrivacySharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePrivacySharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePrivacySharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
