import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { faHome, faClipboardList, faCalendar, faChartPie, faInfoCircle, faBuilding, faPhone, faComments, faSignOutAlt, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tutorlist-page',
  templateUrl: './tutorlist.component.html',
  styleUrls: ['./tutorlist.component.scss']
})
export class TutorListComponent implements OnInit {
  faHome = faHome;
  faClipboardList = faClipboardList;
  faCalendar = faCalendar;
  faChartPie = faChartPie;
  faInfoCircle = faInfoCircle;
  faBuilding = faBuilding;
  faPhone = faPhone;
  faComments = faComments;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  faUserCircle = faUserCircle;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() { }

}
