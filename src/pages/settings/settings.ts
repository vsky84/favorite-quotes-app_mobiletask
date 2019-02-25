import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  toggleBackground:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsSvc:SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  OnToggle(toggle: boolean) {
    this.settingsSvc.setBackground(toggle);
  }
}
