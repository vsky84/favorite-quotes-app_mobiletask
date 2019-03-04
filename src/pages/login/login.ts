import { TabspagePage } from './../tabspage/tabspage';
import { AuthService } from './../../services/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit{
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private alertCtrl: AlertController, private authSvc: AuthService) {
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm=new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    this.authSvc.signin(this.loginForm.value.email,this.loginForm.value.password).then(auth => {
        this.navCtrl.setRoot(TabspagePage);
      })
      .catch(err => { 
      let alert = this.alertCtrl.create({
          title: 'Error in Login',
          message: 'Please check your login credentials. ' + err,
          buttons: ['OK']
      });
      alert.present();
    });
  }
  loginSuccessToast() {
    let toast = this.toastCtrl.create({
      message: 'Logging in...',
      duration: 3000
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
