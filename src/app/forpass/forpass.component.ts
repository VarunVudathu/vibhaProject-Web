import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'

@Component({
  selector: 'app-forpass-page',
  templateUrl: './forpass.component.html',
  styleUrls: ['./forpass.component.scss']
})
export class ForPassComponent implements OnInit{
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }
}