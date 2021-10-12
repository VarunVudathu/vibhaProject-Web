import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/stepone/signup.component';
import { SignUpDetailsComponent } from './signup/steptwo/signupdetails.component';
import { MoreSignUpDetailsTutorComponent } from './signup/stepthree/tutor/moresignupdetailstutor.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupdetails', component: SignUpDetailsComponent },
  { path: 'signupdetailstutor', component: MoreSignUpDetailsTutorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignUpComponent, SignUpDetailsComponent, MoreSignUpDetailsTutorComponent]
