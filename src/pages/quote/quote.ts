import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  selectedQuote: any={'id':"a","person":"b","text":"c"};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService, private viewCtrl: ViewController) {
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
            this.viewCtrl.dismiss();
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
  OnModalClose() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.selectedQuote=this.navParams.get('quote');
  }

}
