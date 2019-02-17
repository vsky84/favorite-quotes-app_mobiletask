import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  quoteList: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  OnFavorite(btn,quoteChoice) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle:'',
      message: 'Are you sure you want to add the quote to favorites?',
      buttons: [
        {
          text:'Ok',
          handler:()=>{
            this.quotesService.addQuoteToFavorites(quoteChoice);
            //if(btn._color === 'primary') { 
              //this.quotesService.addQuoteToFavorites(quoteChoice);
              //btn.color='danger';
              //btn._elementRef.nativeElement.firstChild.childNodes[0].data="Unfavorite";
            //}
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
    if(btn._color==='danger') {
      this.quotesService.removeQuoteFromFavorites(quoteChoice);
    }
    else {
      alert.present();
    }
    //if(btn._color === 'primary') alert.present();
    //else {
      //this.quotesService.removeQuoteFromFavorites(quoteChoice);
      //btn.color='primary';
      //btn._elementRef.nativeElement.firstChild.childNodes[0].data="Favorite";
    //}    
  }
  OnQuoteCheckFavorite(quote): boolean {
    return this.quotesService.isFavorite(quote);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.quoteList=this.navParams.get('quotes');
  }

}
