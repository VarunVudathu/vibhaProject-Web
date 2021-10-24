import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  constructor(private route: Router) {}

  storeData(name, user, email, pass, cemail, cpass) {
    if(name != '' || user != '' || email != '' || pass != '' || cemail != '' || cpass != '') {
      if (email == cemail && pass == cpass) {
        localStorage.setItem("name", name);
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        localStorage.setItem("email", email);
        this.route.navigate(['signupdetails']);
      } else {
        alert("Emails or Passwords don't match.")
      }
    } else {
      alert("Some inputs are empty.")
    }
  }
}