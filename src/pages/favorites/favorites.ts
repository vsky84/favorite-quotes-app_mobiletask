import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { Component } from '@angular/core';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteQuoteList: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService, private toastCtrl: ToastController, private modalCtrl: ModalController, private alertCtrl: AlertController, private settingsSvc:SettingsService) {
  }
  onDetails(quote) {
    let modal=this.modalCtrl.create(QuotePage,{quote:quote});
    modal.present();
  }
  onUnfavorite(quoteChoice) {
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
  onAddQuote() {
    const alert = this.alertCtrl.create({
      title: 'Add New Quote',
      inputs:[
        {
          name: 'author',
          placeholder: 'Author Name'
        },
        {
          name: 'quote',
          placeholder: 'Quote by author'
        }
      ],
      buttons: [
        {
          text:'Add',
          handler:data=>{
            if(!(data.author==="" || data.quote==="")) {
              this.quotesService.addNewQuoteToFavorites(data.author, data.quote);
              this.addedToast();
            }
            else {
              this.errorToast();
            }
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
  addedToast() {
    let toast = this.toastCtrl.create({
      message: 'New quote added',
      duration: 3000
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Please fill all fields',
      duration: 3000
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  // ionViewDidLoad() {
  //   this.favoriteQuoteList=this.quotesService.getAllFavoriteQuotes();
  //   console.log('ionViewDidLoad FavoritesPage');
  // }
  ionViewWillEnter(){
    this.favoriteQuoteList=this.quotesService.getAllFavoriteQuotes();
    console.log('ionViewWillEnter FavoritesPage');
  }
  setBgColor() {
    return this.settingsSvc.isAltBackground() ? 'altFavBg':'favBg';
  }

}
