import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileLoginSecurityComponent } from './profile-login-security/profile-login-security.component';
import { ProfilePersonalInfoComponent } from './profile-personal-info/profile-personal-info.component';
import { ProfilePrivacySharingComponent } from './profile-privacy-sharing/profile-privacy-sharing.component';

const routes: Routes = [
  {
    path : 'profile', 
    component : ProfileHomeComponent,
    children: [
      { path: 'personal-info', component: ProfilePersonalInfoComponent },
      { path: 'login-security', component: ProfileLoginSecurityComponent },
      { path: 'privacy-sharing', component: ProfilePrivacySharingComponent },
      { path: '', redirectTo:'personal-info', pathMatch:"full" }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
