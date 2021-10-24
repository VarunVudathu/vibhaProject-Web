import { Component, ViewChild } from '@angular/core';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signupdetails-page',
  templateUrl: './signupdetails.component.html',
  styleUrls: ['./signupdetails.component.scss']
})
export class SignUpDetailsComponent {
  constructor(private route: Router) {}

  faChalkboardTeacher = faChalkboardTeacher;
  faUserGraduate = faUserGraduate;
  statusClassTu = 'notSelected';
  statusClassStu = 'notSelected';

  newStyleTutor() {
    this.statusClassTu = 'selected';
    if (this.statusClassStu == 'selected') {
      this.statusClassStu = 'notSelected';
    }
  }

  newStyleStu() {
    this.statusClassStu = 'selected'
    if (this.statusClassTu == 'selected') {
      this.statusClassTu = 'notSelected';
    }
  }

  storeData(age, grade) {
    if(age != '' || grade != '') {
      localStorage.setItem("age", age);
      localStorage.setItem("grade", grade);

      if (this.statusClassStu == 'selected') {
        let choice = 'students';
        localStorage.setItem("choice", choice);
        this.route.navigate(['signupdetailsstu']);
      } else if (this.statusClassTu == 'selected'){
        let choice = 'tutors'
        localStorage.setItem("choice", choice);
        this.route.navigate(['signupdetailstutor']);
      } else {
        alert('Choose a role.')
      }

    } else {
      alert('Some inputs are empty.')
    }
  }
}