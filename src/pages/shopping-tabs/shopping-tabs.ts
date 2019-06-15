import { Component, ViewChild } from '@angular/core';
import {  NavController, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyproductsPage } from '../myproducts/myproducts';
import { BuyPage } from '../buy/buy';
import { ProfilePage } from '../profile/profile';
import {Storage} from '@ionic/storage'
import { AuthProvider } from '../../providers/auth/auth';
import { AdminconnectPage } from '../adminconnect/adminconnect';
/**
 * Generated class for the ShoppingTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-tabs',
  templateUrl: 'shopping-tabs.html'
})
export class ShoppingTabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  m=false;
  allproductsRoot = HomePage;
  buyRoot = BuyPage
  myproductsRoot = MyproductsPage;
  myProfile = ProfilePage;
  admin = AdminconnectPage;

  constructor(public navCtrl: NavController, public af:Storage, Auth:AuthProvider) {
    af.get('isloggedin').then((val)=>{
      console.log(val);
      if(val){
        this.m=true;
      }
    });
  }

ionViewDidLoad() {

}
}
