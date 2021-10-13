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
}