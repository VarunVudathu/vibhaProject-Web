import { Component, ViewChild } from '@angular/core';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signupdetails-page',
  templateUrl: './signupdetails.component.html',
  styleUrls: ['./signupdetails.component.scss']
})
export class SignUpDetailsComponent {
  faChalkboardTeacher = faChalkboardTeacher;
  faUserGraduate = faUserGraduate;
}