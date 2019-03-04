import { SignupPage } from './../pages/signup/signup';
import { AuthService } from './../services/auth';
import { LoginPage } from './../pages/login/login';
import { SettingsPage } from './../pages/settings/settings';

import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, MenuController, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabspagePage } from './../pages/tabspage/tabspage';


import firebase from "firebase";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  tabsPage=TabspagePage;
  settingsPage = SettingsPage;
  loginPage = LoginPage;
  signupPage= SignupPage;
  zone: NgZone;
  @ViewChild('sideMenuContent') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private authSvc: AuthService) {
    this.zone=new NgZone({});
    var config = {
      apiKey: "AIzaSyALqDx-wyKZTTb2b7t4WNE1oDZx800dCsI",
      authDomain: "mobile2-quotes-app-37148.firebaseapp.com",
      databaseURL: "https://mobile2-quotes-app-37148.firebaseio.com",
      projectId: "mobile2-quotes-app-37148",
      storageBucket: "mobile2-quotes-app-37148.appspot.com",
      messagingSenderId: "580596503270"
    };
    firebase.initializeApp(config);   
    const unsubscribe = firebase.auth().onAuthStateChanged(
      user=>{
        if(user) {
          this.nav.setRoot(TabspagePage);
          //this.rootPage=TabspagePage;
          unsubscribe();
        }
        else {
          this.nav.setRoot(LoginPage);
          //this.rootPage=LoginPage;
          unsubscribe();
        }
      }
    ) 
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout() {
    this.authSvc.logout();
    this.nav.setRoot(LoginPage);
    this.menuCtrl.close();
  }
  getLoggedUser() {
    return this.authSvc.getCurrentUser();
  }
}

