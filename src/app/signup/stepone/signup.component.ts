import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  storeData(name, user, email, pass, cemail, cpass) {
      if (email == cemail && pass == cpass) {
        localStorage.setItem("name", name);
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        localStorage.setItem("email", email);
      } else {
        alert("Emails or Passwords don't match.")
      }
  }
}