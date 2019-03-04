import { TabspagePage } from './../tabspage/tabspage';
import { AuthService } from './../../services/auth';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{
  registerForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private alertCtrl: AlertController, private authSvc: AuthService) {
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.registerForm=new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    this.authSvc.signup(this.registerForm.value.email,this.registerForm.value.password).then(auth => {
      this.registerSuccessToast();
      this.navCtrl.setRoot(TabspagePage);
    })
    .catch(err => { 
      let alert = this.alertCtrl.create({
        title: 'Error while registering',
        message: err + ' try again.',
        buttons: ['OK']
      });
      alert.present(); 
    });
  }
  registerSuccessToast() {
    let toast = this.toastCtrl.create({
      message: 'Register success, automatically logged in.',
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

}
