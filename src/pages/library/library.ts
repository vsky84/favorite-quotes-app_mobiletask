import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { QuotePage } from '../quote/quote';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.quoteCollection=quotes;
    //console.log(this.quoteCollection);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }
  onCategoryClicked() {
    this.navCtrl.push(QuotePage);
  }
}
