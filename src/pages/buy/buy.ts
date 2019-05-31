import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProfilePage } from '../user-profile/user-profile';
import { BuyProductsPage } from '../buy-products/buy-products';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

  constructor(public navCtrl: NavController,
     private app:App,
     public navParams: NavParams,private _AuthProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }
  buy(name:string){
    if(this._AuthProvider.isLoggedIn()){
      console.log(this._AuthProvider.isLoggedIn());
    }  else{
      this.app.getRootNav().setRoot('AuthPage');
      this.navCtrl.goToRoot;
      console.log(this._AuthProvider.isLoggedIn());
    }
    console.log(name);
    this.navCtrl.push(BuyProductsPage,name);
  }
}
