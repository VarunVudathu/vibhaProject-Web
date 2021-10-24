import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/stepone/signup.component';
import { SignUpDetailsComponent } from './signup/steptwo/signupdetails.component';
import { MoreSignUpDetailsTutorComponent } from './signup/stepthree/tutor/moresignupdetailstutor.component';
import { MoreSignUpDetailsStuComponent } from './signup/stepthree/student/moresignupdetailsStu.component';
import { ForPassComponent } from './forpass/forpass.component';
import { HomeComponent } from './home/home.component';
import { TutorListComponent } from './tutorlist/tutorlist.component'
import { AuthGuard } from "./shared/guard/auth.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signupdetails', component: SignUpDetailsComponent },
  { path: 'signupdetailstutor', component: MoreSignUpDetailsTutorComponent },
  { path: 'signupdetailsstu', component: MoreSignUpDetailsStuComponent },
  { path: 'forpass', component: ForPassComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'tutorlist', component: TutorListComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignUpComponent, SignUpDetailsComponent, MoreSignUpDetailsTutorComponent, MoreSignUpDetailsStuComponent, ForPassComponent, HomeComponent, TutorListComponent]
