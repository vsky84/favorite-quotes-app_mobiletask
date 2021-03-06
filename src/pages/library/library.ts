import { QuotesService } from './../../services/quotes';
import { SettingsService } from './../../services/settings';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection:{category:string, quotes:Quote[], icon:string}[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsSvc: SettingsService, private quotesSvc: QuotesService) {
  }
  ngOnInit() {
    this.quoteCollection=quotes;
    this.settingsSvc.initializeFavBackground();
    //this.quotesSvc.initializeFavorites();
    //console.log(this.quoteCollection);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }
  onCategoryClicked(i) {
    console.log(this.quoteCollection[i]);
    this.navCtrl.push(QuotesPage,this.quoteCollection[i]);
  }
}
