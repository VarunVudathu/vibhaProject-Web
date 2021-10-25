import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service'

@Component({
  selector: 'app-moresignupdetailsstu-page',
  templateUrl: './moresignupdetailsstu.component.html',
  styleUrls: ['./moresignupdetailsstu.component.scss']
})
export class MoreSignUpDetailsStuComponent implements OnInit{
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

  storeData(subjects) {
    if (subjects != '') {
      localStorage.setItem("subjects", subjects);
    }

    let emaillogin = localStorage.getItem('email');
    let passlogin = localStorage.getItem('password');
    let chosen = localStorage.getItem('choice');
    let namelogin = localStorage.getItem('name');
    let usernamelogin = localStorage.getItem('username');
    let gradelogin = localStorage.getItem('grade');
    let agelogin = localStorage.getItem('age');
    let subjectlogin = localStorage.getItem('subjects');

    let userInfo = {
      username: usernamelogin,
      password: passlogin,
      name: namelogin,
      email: emaillogin,
      age: agelogin,
      grade: gradelogin,
      subjects: subjectlogin
    }
    this.authService.SignUp(userInfo, chosen);
  }
}