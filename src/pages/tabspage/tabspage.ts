import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabspage',
  template:'<ion-tabs> <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab><ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab></ion-tabs>'
})
export class TabspagePage {
  libraryPage = LibraryPage;
  favoritesPage = FavoritesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabspagePage');
  }

}
