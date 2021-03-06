import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { MoreSignUpDetailsTutorComponent } from './moresignupdetailstutor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [MoreSignUpDetailsTutorComponent]
})
export class MoreSignUpDetailsTutorModule {}
