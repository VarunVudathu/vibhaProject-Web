import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { faHome, faClipboardList, faCalendar, faChartPie, faInfoCircle, faBuilding, faPhone, faComments, faSignOutAlt, faBars, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drawernav',
  templateUrl: './drawernav.component.html',
  styleUrls: ['./drawernav.component.scss']
})
export class DrawerNavComponent implements OnInit {
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
  faTimes = faTimes;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() { }

}
