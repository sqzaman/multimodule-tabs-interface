import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileLoginSecurityComponent } from './profile-login-security/profile-login-security.component';
import { ProfilePersonalInfoComponent } from './profile-personal-info/profile-personal-info.component';
import { ProfilePrivacySharingComponent } from './profile-privacy-sharing/profile-privacy-sharing.component';

@NgModule({
  declarations: [ProfileHomeComponent, ProfileLoginSecurityComponent, ProfilePersonalInfoComponent, ProfilePrivacySharingComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
