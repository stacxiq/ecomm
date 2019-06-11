import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { AuthProvider } from '../../providers/auth/auth';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private app:App, private _AuthProvider:AuthProvider) {

  }
  buy(item:string){
    if(this._AuthProvider.isLoggedIn()){
      console.log(this._AuthProvider.isLoggedIn());
      console.log(item);
      this.app.getRootNav().push(ProductPage,item);
    }  else{
      this.app.getRootNav().setRoot(AuthPage);
      this.navCtrl.goToRoot;
      console.log(this._AuthProvider.isLoggedIn());
    }

  }

}
