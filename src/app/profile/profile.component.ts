import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { faUserCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    public dialog: MatDialog,
  ) { }

  ngOnInit() { }

  goBack() {
    window.history.back();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      width: '30%',
      height: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-dialoginfo',
  templateUrl: './dialoginfo.component.html',
  styleUrls: ['./dialoginfo.component.scss']
})
export class DialogInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogInfoComponent>
  ) { }

  ngOnInit() { }

  onNoClick() {
    this.dialogRef.close();
  }
}
