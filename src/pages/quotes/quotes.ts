import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteList: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  OnFavorite(quoteChoice) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle:'',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text:'Ok',
          handler:()=>{
            this.quotesService.addQuoteToFavorites(quoteChoice);
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log("CANCELLED");
          }
        }
      ]
    });
    alert.present(); 
  }
  OnUnfavorite(quoteChoice) {
    const alert = this.alertCtrl.create({
      title: 'Unfavorite Quote',
      subTitle:'',
      message: 'Are you sure you want to remove the quote from favorites?',
      buttons: [
        {
          text:'Ok',
          handler:()=>{
            this.quotesService.removeQuoteFromFavorites(quoteChoice);
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log("CANCELLED");
          }
        }
      ]
    });
    alert.present();
  }
  OnQuoteCheckFavorite(quote): boolean {
    return this.quotesService.isFavorite(quote);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    this.quoteList=this.navParams.get('quotes');
  }

}
