import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { faHome, faClipboardList, faCalendar, faChartPie, faInfoCircle, faBuilding, faPhone, faComments, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() { }

}
