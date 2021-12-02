import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faUserCircle = faUserCircle
  faArrowLeft = faArrowLeft

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() { }

  goBack() {
    window.history.back();
  }
}
