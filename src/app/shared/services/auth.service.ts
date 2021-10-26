import { Injectable, NgZone } from '@angular/core';
import { UserStu } from "./user";
import { UserTutor } from "./otheruser";
import { User } from "./logincred";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(userInfo, choice) {
    return this.afAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SetUserData(result.user);
        this.SetOtherUserData(userInfo, choice)
        this.router.navigate(['login']);
        window.alert('Sign up was successful!');
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user != null) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
          this.router.navigate(['signupdetails']);
        })
      this.SetUserData(result.user);
      //this.SetOtherUserData(userInfo, choice);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  SetOtherUserData(userInfo, choice) {
    if(choice == 'students') {
      console.log(userInfo);
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`students/${userInfo.email}`);
      const userData: UserStu = {
        username: userInfo.username,
        password: userInfo.password,
        name: userInfo.name,
        email: userInfo.email,
        age: userInfo.age,
        grade: userInfo.grade,
        subjects: userInfo.subjects,
      }
      return userRef.set(userData, {
        merge: true
      })
    } else {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`tutors/${userInfo.email}`);
      const userData: UserTutor = {
        username: userInfo.username,
        password: userInfo.password,
        name: userInfo.name,
        email: userInfo.email,
        age: userInfo.age,
        grade: userInfo.grade,
        lgrade: userInfo.lgrade,
        hgrade: userInfo.hgrade,
        subjects: userInfo.subjects,
        description: userInfo.description,
      }
      return userRef.set(userData, {
        merge: true
      })
    }
  }
  

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}