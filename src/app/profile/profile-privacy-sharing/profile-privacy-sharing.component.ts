import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-privacy-sharing',
  templateUrl: './profile-privacy-sharing.component.html',
  styleUrls: ['./profile-privacy-sharing.component.css']
})
export class ProfilePrivacySharingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("I am in privacy and sharing");
  }

}
