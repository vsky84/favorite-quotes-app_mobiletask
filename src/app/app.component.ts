import { SettingsPage } from './../pages/settings/settings';

import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabspagePage } from './../pages/tabspage/tabspage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabspagePage;
  tabsPage=TabspagePage;
  settingsPage = SettingsPage;
  @ViewChild('sideMenuContent') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
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
}

